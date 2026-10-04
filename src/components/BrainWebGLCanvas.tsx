import { memo, useEffect, useRef } from "react";

interface Props {
  isIntro?: boolean | undefined;
  circuitColor: string | null;
  svgText: string;
  onSync?: (() => void) | undefined;
  onComplete?: (() => void) | undefined;
}

// Cubic bezier approximation
function cubicBezier(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
): number {
  const it = 1 - t;
  return (
    it * it * it * p0 +
    3 * it * it * t * p1 +
    3 * it * t * t * p2 +
    t * t * t * p3
  );
}

// Convert CSS hex color to RGBA array (0..1)
function hexToRgba(
  hex: string,
  defaultAlpha = 1.0,
): [number, number, number, number] {
  let clean = hex.trim().replace("#", "");
  if (clean.length === 3 || clean.length === 4) {
    clean = clean
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const r = parseInt(clean.slice(0, 2), 16) / 255 || 0;
  const g = parseInt(clean.slice(2, 4), 16) / 255 || 0;
  const b = parseInt(clean.slice(4, 6), 16) / 255 || 0;
  const a =
    clean.length === 8 ? parseInt(clean.slice(6, 8), 16) / 255 : defaultAlpha;
  return [r, g, b, Number.isNaN(a) ? defaultAlpha : a];
}

function parseStyle(styleStr: string | undefined): {
  del: number;
  rand: number;
  len: number;
} {
  const res = { del: 0, rand: 0, len: 600 };
  if (!styleStr) return res;
  const delMatch = styleStr.match(/--del:\s*([0-9.]+)s/);
  if (delMatch) res.del = parseFloat(delMatch[1] ?? "0");
  const randMatch = styleStr.match(/--rand:\s*([0-9.]+)s/);
  if (randMatch) res.rand = parseFloat(randMatch[1] ?? "0");
  const lenMatch = styleStr.match(/--len:\s*([0-9.]+)px/);
  if (lenMatch) res.len = parseFloat(lenMatch[1] ?? "600");
  return res;
}

function parseSvgPath(d: string): { x: number; y: number }[][] {
  const tokens: (string | number)[] = [];
  const regex = /([a-df-z])|([-+]?[0-9]*\.?[0-9]+(?:e[-+]?[0-9]+)?)/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(d)) !== null) {
    if (match[1]) {
      tokens.push(match[1]);
    } else if (match[2]) {
      tokens.push(parseFloat(match[2]));
    }
  }

  const subpaths: { x: number; y: number }[][] = [];
  let currentSubpath: { x: number; y: number }[] = [];
  let currentPoint = { x: 0, y: 0 };
  let startPoint = { x: 0, y: 0 };
  let i = 0;
  let currentCommand = "";

  while (i < tokens.length) {
    const token = tokens[i];
    if (typeof token === "string") {
      currentCommand = token;
      i++;
    }

    if (currentCommand === "M" || currentCommand === "m") {
      const isRel = currentCommand === "m";
      const x = isRel
        ? currentPoint.x + (tokens[i] as number)
        : (tokens[i] as number);
      const y = isRel
        ? currentPoint.y + (tokens[i + 1] as number)
        : (tokens[i + 1] as number);
      i += 2;
      if (currentSubpath.length > 0) {
        subpaths.push(currentSubpath);
        currentSubpath = [];
      }
      currentPoint = { x, y };
      startPoint = { x, y };
      currentSubpath = [currentPoint];
      currentCommand = isRel ? "l" : "L";
    } else if (currentCommand === "L" || currentCommand === "l") {
      const isRel = currentCommand === "l";
      const x = isRel
        ? currentPoint.x + (tokens[i] as number)
        : (tokens[i] as number);
      const y = isRel
        ? currentPoint.y + (tokens[i + 1] as number)
        : (tokens[i + 1] as number);
      i += 2;
      currentPoint = { x, y };
      currentSubpath.push(currentPoint);
    } else if (currentCommand === "C" || currentCommand === "c") {
      const isRel = currentCommand === "c";
      const cp1x = isRel
        ? currentPoint.x + (tokens[i] as number)
        : (tokens[i] as number);
      const cp1y = isRel
        ? currentPoint.y + (tokens[i + 1] as number)
        : (tokens[i + 1] as number);
      const cp2x = isRel
        ? currentPoint.x + (tokens[i + 2] as number)
        : (tokens[i + 2] as number);
      const cp2y = isRel
        ? currentPoint.y + (tokens[i + 3] as number)
        : (tokens[i + 3] as number);
      const x = isRel
        ? currentPoint.x + (tokens[i + 4] as number)
        : (tokens[i + 4] as number);
      const y = isRel
        ? currentPoint.y + (tokens[i + 5] as number)
        : (tokens[i + 5] as number);
      i += 6;

      const p0 = currentPoint;
      const steps = 4;
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        const bx = cubicBezier(t, p0.x, cp1x, cp2x, x);
        const by = cubicBezier(t, p0.y, cp1y, cp2y, y);
        currentSubpath.push({ x: bx, y: by });
      }
      currentPoint = { x, y };
    } else if (currentCommand === "Z" || currentCommand === "z") {
      if (
        currentSubpath.length > 0 &&
        (currentPoint.x !== startPoint.x || currentPoint.y !== startPoint.y)
      ) {
        currentSubpath.push(startPoint);
      }
      currentPoint = startPoint;
      if (typeof tokens[i] !== "string") {
        i++;
      }
    } else {
      i++;
    }
  }

  if (currentSubpath.length > 0) {
    subpaths.push(currentSubpath);
  }

  return subpaths;
}

interface BrainGeometry {
  lineData: Float32Array;
  lineCount: number;
  nodeData: Float32Array;
  nodeCount: number;
}

let cachedGeometry: BrainGeometry | null = null;

function buildGeometry(svgText: string): BrainGeometry {
  if (cachedGeometry) return cachedGeometry;

  const parser = new DOMParser();
  const doc = parser.parseFromString(svgText, "image/svg+xml");

  const lineVertices: number[] = [];
  const nodeVertices: number[] = [];

  // 1. Lines (<path>)
  const paths = doc.querySelectorAll("path");
  paths.forEach((pathEl, pathIdx) => {
    const d = pathEl.getAttribute("d") ?? "";
    const style = parseStyle(pathEl.getAttribute("style") ?? "");
    const colorType = pathIdx % 3 === 0 ? 1 : 0;
    const subpaths = parseSvgPath(d);

    for (const sp of subpaths) {
      if (sp.length < 2) continue;

      let totalLen = 0;
      const dists: number[] = [0];
      for (let j = 1; j < sp.length; j++) {
        const prev = sp[j - 1];
        const curr = sp[j];
        if (!prev || !curr) continue;
        const dx = curr.x - prev.x;
        const dy = curr.y - prev.y;
        totalLen += Math.sqrt(dx * dx + dy * dy);
        dists.push(totalLen);
      }

      const pathTotalLen = style.len || totalLen || 600;

      for (let j = 0; j < sp.length - 1; j++) {
        const p1 = sp[j];
        const p2 = sp[j + 1];
        const d1 = dists[j];
        const d2 = dists[j + 1];
        if (!p1 || !p2 || d1 === undefined || d2 === undefined) continue;

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        if (len < 1e-4) continue;
        const nx = -dy / len;
        const ny = dx / len;

        lineVertices.push(
          p1.x,
          p1.y,
          nx,
          ny,
          d1,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,
          p1.x,
          p1.y,
          -nx,
          -ny,
          d1,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,
          p2.x,
          p2.y,
          nx,
          ny,
          d2,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,

          p2.x,
          p2.y,
          nx,
          ny,
          d2,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,
          p1.x,
          p1.y,
          -nx,
          -ny,
          d1,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,
          p2.x,
          p2.y,
          -nx,
          -ny,
          d2,
          pathTotalLen,
          style.del,
          style.rand,
          colorType,
        );
      }
    }
  });

  // 2. Nodes (<rect>, <circle>, <ellipse>)
  const rects = doc.querySelectorAll("rect");
  rects.forEach((rectEl, rectIdx) => {
    const style = parseStyle(rectEl.getAttribute("style") ?? "");
    const colorType = (rectIdx + 1) % 3 === 0 ? 3 : 2;
    const x = parseFloat(rectEl.getAttribute("x") ?? "0");
    const y = parseFloat(rectEl.getAttribute("y") ?? "0");
    const w = parseFloat(rectEl.getAttribute("width") ?? "1");
    const h = parseFloat(rectEl.getAttribute("height") ?? "1");

    nodeVertices.push(
      x,
      y,
      0,
      0,
      1,
      style.del,
      style.rand,
      colorType,
      0,
      x + w,
      y,
      1,
      0,
      1,
      style.del,
      style.rand,
      colorType,
      0,
      x,
      y + h,
      0,
      1,
      1,
      style.del,
      style.rand,
      colorType,
      0,

      x + w,
      y,
      1,
      0,
      1,
      style.del,
      style.rand,
      colorType,
      0,
      x + w,
      y + h,
      1,
      1,
      1,
      style.del,
      style.rand,
      colorType,
      0,
      x,
      y + h,
      0,
      1,
      1,
      style.del,
      style.rand,
      colorType,
      0,
    );
  });

  const circles = doc.querySelectorAll("circle");
  let circleIdx = 0;
  circles.forEach((circleEl) => {
    const cx = parseFloat(circleEl.getAttribute("cx") ?? "0");
    const cy = parseFloat(circleEl.getAttribute("cy") ?? "0");
    const cls = circleEl.getAttribute("class") ?? "";

    if (cls.includes("centerMicro")) {
      nodeVertices.push(
        cx - 60,
        cy - 60,
        -1,
        -1,
        3,
        0.15,
        0,
        2,
        2.5,
        cx + 60,
        cy - 60,
        1,
        -1,
        3,
        0.15,
        0,
        2,
        2.5,
        cx - 60,
        cy + 60,
        -1,
        1,
        3,
        0.15,
        0,
        2,
        2.5,

        cx + 60,
        cy - 60,
        1,
        -1,
        3,
        0.15,
        0,
        2,
        2.5,
        cx + 60,
        cy + 60,
        1,
        1,
        3,
        0.15,
        0,
        2,
        2.5,
        cx - 60,
        cy + 60,
        -1,
        1,
        3,
        0.15,
        0,
        2,
        2.5,
      );
    } else {
      const style = parseStyle(circleEl.getAttribute("style") ?? "");
      const r = parseFloat(circleEl.getAttribute("r") ?? "2");
      const colorType = (circleIdx + 1) % 3 === 0 ? 3 : 2;

      nodeVertices.push(
        cx - r,
        cy - r,
        -1,
        -1,
        2,
        style.del,
        style.rand,
        colorType,
        r,
        cx + r,
        cy - r,
        1,
        -1,
        2,
        style.del,
        style.rand,
        colorType,
        r,
        cx - r,
        cy + r,
        -1,
        1,
        2,
        style.del,
        style.rand,
        colorType,
        r,

        cx + r,
        cy - r,
        1,
        -1,
        2,
        style.del,
        style.rand,
        colorType,
        r,
        cx + r,
        cy + r,
        1,
        1,
        2,
        style.del,
        style.rand,
        colorType,
        r,
        cx - r,
        cy + r,
        -1,
        1,
        2,
        style.del,
        style.rand,
        colorType,
        r,
      );
      circleIdx++;
    }
  });

  const ellipses = doc.querySelectorAll("ellipse");
  ellipses.forEach((ellipseEl) => {
    const style = parseStyle(ellipseEl.getAttribute("style") ?? "");
    const cx = parseFloat(ellipseEl.getAttribute("cx") ?? "0");
    const cy = parseFloat(ellipseEl.getAttribute("cy") ?? "0");
    const rx = parseFloat(ellipseEl.getAttribute("rx") ?? "4");
    const ry = parseFloat(ellipseEl.getAttribute("ry") ?? "4");
    const r = Math.max(rx, ry) * 0.65;

    nodeVertices.push(
      cx - r,
      cy - r,
      -1,
      -1,
      2,
      style.del,
      style.rand,
      3,
      r,
      cx + r,
      cy - r,
      1,
      -1,
      2,
      style.del,
      style.rand,
      3,
      r,
      cx - r,
      cy + r,
      -1,
      1,
      2,
      style.del,
      style.rand,
      3,
      r,

      cx + r,
      cy - r,
      1,
      -1,
      2,
      style.del,
      style.rand,
      3,
      r,
      cx + r,
      cy + r,
      1,
      1,
      2,
      style.del,
      style.rand,
      3,
      r,
      cx - r,
      cy + r,
      -1,
      1,
      2,
      style.del,
      style.rand,
      3,
      r,
    );
  });

  cachedGeometry = {
    lineData: new Float32Array(lineVertices),
    lineCount: lineVertices.length / 9,
    nodeData: new Float32Array(nodeVertices),
    nodeCount: nodeVertices.length / 9,
  };

  return cachedGeometry;
}

// GLSL Shaders
const LINE_VS = `
attribute vec2 a_position;
attribute vec2 a_normal;
attribute float a_arcLength;
attribute float a_totalLength;
attribute float a_delay;
attribute float a_rand;
attribute float a_colorType;

uniform float u_time;
uniform float u_isIntro;
uniform float u_reducedMotion;

varying float v_colorType;
varying float v_alpha;
varying float v_arcLength;
varying float v_totalLength;
varying float v_dashOffset;

void main() {
  v_colorType = a_colorType;
  v_arcLength = a_arcLength;
  v_totalLength = a_totalLength;

  float opacity = 1.0;
  float dashOffset = 0.0;

  if (u_reducedMotion > 0.5) {
    opacity = 1.0;
    dashOffset = 0.0;
  } else if (u_isIntro > 0.5) {
    float tIntro = u_time - a_delay;
    if (tIntro < 0.0) {
      opacity = 0.0;
      dashOffset = a_totalLength;
    } else if (tIntro < 1.1) {
      float p = clamp(tIntro / 1.1, 0.0, 1.0);
      float ease = 1.0 - pow(1.0 - p, 3.0);
      opacity = min(1.0, (tIntro / 0.22));
      dashOffset = a_totalLength * (1.0 - ease);
    } else {
      float tCycle = u_time - (a_delay + 1.25 + a_rand);
      if (tCycle < 0.0) {
        opacity = 1.0;
        dashOffset = 0.0;
      } else {
        float osc = 0.5 - 0.5 * cos(tCycle * 6.28318 / 3.2);
        dashOffset = a_totalLength * osc;
        opacity = 1.0 - 0.25 * osc;
      }
    }
  } else {
    float tCycle = u_time + a_rand;
    float osc = 0.5 - 0.5 * cos(tCycle * 6.28318 / 3.2);
    dashOffset = a_totalLength * osc;
    opacity = 1.0 - 0.25 * osc;
  }

  v_alpha = opacity;
  v_dashOffset = dashOffset;

  vec2 pos = a_position + a_normal * 0.55;
  vec2 normPos = vec2((pos.x + 2.0) / 584.2, (pos.y + 2.0) / 508.7);
  vec2 ndc = vec2(normPos.x * 2.0 - 1.0, 1.0 - normPos.y * 2.0);

  gl_Position = vec4(ndc, 0.0, 1.0);
}
`;

const LINE_FS = `
precision mediump float;

uniform vec4 u_colorBp;
uniform vec4 u_colorBap;
uniform vec4 u_circuitColor;
uniform float u_hasCircuit;

varying float v_colorType;
varying float v_alpha;
varying float v_arcLength;
varying float v_totalLength;
varying float v_dashOffset;

void main() {
  if (v_alpha <= 0.001) {
    discard;
  }

  if (v_arcLength > (v_totalLength - v_dashOffset)) {
    discard;
  }

  vec4 baseColor;
  if (u_hasCircuit > 0.5) {
    baseColor = vec4(u_circuitColor.rgb, u_circuitColor.a * 0.45);
  } else {
    baseColor = (v_colorType > 0.5) ? u_colorBap : u_colorBp;
  }

  gl_FragColor = vec4(baseColor.rgb, baseColor.a * v_alpha);
}
`;

const NODE_VS = `
attribute vec2 a_position;
attribute vec2 a_uv;
attribute float a_elemType;
attribute float a_delay;
attribute float a_rand;
attribute float a_colorType;
attribute float a_extra;

uniform float u_time;
uniform float u_isIntro;
uniform float u_reducedMotion;

varying float v_elemType;
varying float v_colorType;
varying float v_alpha;
varying vec2 v_uv;

void main() {
  v_elemType = a_elemType;
  v_colorType = a_colorType;
  v_uv = a_uv;

  float opacity = 1.0;

  if (u_reducedMotion > 0.5) {
    opacity = (a_elemType == 3.0) ? 0.0 : 1.0;
  } else if (a_elemType == 3.0) {
    if (u_isIntro > 0.5) {
      float tPulse = u_time - 0.15;
      if (tPulse >= 0.0 && tPulse <= 0.65) {
        float p = tPulse / 0.65;
        opacity = (p < 0.4) ? (p / 0.4) * 0.7 : (1.0 - (p - 0.4) / 0.6) * 0.7;
      } else {
        opacity = 0.0;
      }
    } else {
      opacity = 0.0;
    }
  } else if (u_isIntro > 0.5) {
    float tIntro = u_time - a_delay;
    if (tIntro < 0.0) {
      opacity = 0.0;
    } else if (tIntro < 0.5) {
      float p = tIntro / 0.5;
      if (p < 0.6) {
        opacity = p / 0.6;
      } else {
        opacity = 1.0;
      }
    } else {
      float tCycle = u_time - (a_delay + 1.25 + a_rand);
      if (tCycle < 0.0) {
        opacity = 1.0;
      } else {
        float osc = 0.5 - 0.5 * cos(tCycle * 6.28318 / 3.0);
        opacity = 1.0 - 0.85 * osc;
      }
    }
  } else {
    float tCycle = u_time + a_rand;
    float osc = 0.5 - 0.5 * cos(tCycle * 6.28318 / 3.0);
    opacity = 1.0 - 0.85 * osc;
  }

  v_alpha = opacity;

  vec2 pos = a_position;
  vec2 normPos = vec2((pos.x + 2.0) / 584.2, (pos.y + 2.0) / 508.7);
  vec2 ndc = vec2(normPos.x * 2.0 - 1.0, 1.0 - normPos.y * 2.0);

  gl_Position = vec4(ndc, 0.0, 1.0);
}
`;

const NODE_FS = `
precision mediump float;

uniform vec4 u_colorBn;
uniform vec4 u_colorBa;
uniform vec4 u_circuitColor;
uniform float u_hasCircuit;

varying float v_elemType;
varying float v_colorType;
varying float v_alpha;
varying vec2 v_uv;

void main() {
  if (v_alpha <= 0.001) {
    discard;
  }

  if (v_elemType == 2.0) {
    float dist = length(v_uv);
    if (dist > 1.0) {
      discard;
    }
  } else if (v_elemType == 3.0) {
    float dist = length(v_uv);
    if (dist > 1.0 || dist < 0.8) {
      discard;
    }
  }

  vec4 baseColor;
  if (u_hasCircuit > 0.5) {
    baseColor = u_circuitColor;
  } else {
    baseColor = (v_colorType > 2.5) ? u_colorBa : u_colorBn;
  }

  gl_FragColor = vec4(baseColor.rgb, baseColor.a * v_alpha);
}
`;

function createShader(
  gl: WebGLRenderingContext,
  type: number,
  source: string,
): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(
  gl: WebGLRenderingContext,
  vsSource: string,
  fsSource: string,
): WebGLProgram | null {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const prog = gl.createProgram();
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);

  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    gl.deleteProgram(prog);
    return null;
  }
  return prog;
}

function getWebGLContext(
  canvas: HTMLCanvasElement,
): WebGLRenderingContext | null {
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  if (gl) return gl;
  const expGl = canvas.getContext("experimental-webgl");
  if (
    expGl &&
    typeof (expGl as WebGLRenderingContext).compileShader === "function"
  ) {
    return expGl as WebGLRenderingContext;
  }
  return null;
}

function BrainWebGLCanvasComponent({
  isIntro = false,
  circuitColor,
  svgText,
  onSync,
  onComplete,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const onSyncRef = useRef(onSync);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onSyncRef.current = onSync;
    onCompleteRef.current = onComplete;
  }, [onSync, onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !svgText) return;

    const glContext = getWebGLContext(canvas);
    if (!glContext) return;
    const gl: WebGLRenderingContext = glContext;

    const geometry = buildGeometry(svgText);

    const lineProg = createProgram(gl, LINE_VS, LINE_FS);
    const nodeProg = createProgram(gl, NODE_VS, NODE_FS);
    if (!lineProg || !nodeProg) return;

    // Line program setup
    const lineVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, lineVBO);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.lineData, gl.STATIC_DRAW);

    const lineAttribs = {
      pos: gl.getAttribLocation(lineProg, "a_position"),
      normal: gl.getAttribLocation(lineProg, "a_normal"),
      arcLen: gl.getAttribLocation(lineProg, "a_arcLength"),
      totalLen: gl.getAttribLocation(lineProg, "a_totalLength"),
      del: gl.getAttribLocation(lineProg, "a_delay"),
      rand: gl.getAttribLocation(lineProg, "a_rand"),
      colorType: gl.getAttribLocation(lineProg, "a_colorType"),
    };

    const lineUniforms = {
      time: gl.getUniformLocation(lineProg, "u_time"),
      isIntro: gl.getUniformLocation(lineProg, "u_isIntro"),
      reducedMotion: gl.getUniformLocation(lineProg, "u_reducedMotion"),
      colorBp: gl.getUniformLocation(lineProg, "u_colorBp"),
      colorBap: gl.getUniformLocation(lineProg, "u_colorBap"),
      circuitColor: gl.getUniformLocation(lineProg, "u_circuitColor"),
      hasCircuit: gl.getUniformLocation(lineProg, "u_hasCircuit"),
    };

    // Node program setup
    const nodeVBO = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, nodeVBO);
    gl.bufferData(gl.ARRAY_BUFFER, geometry.nodeData, gl.STATIC_DRAW);

    const nodeAttribs = {
      pos: gl.getAttribLocation(nodeProg, "a_position"),
      uv: gl.getAttribLocation(nodeProg, "a_uv"),
      elemType: gl.getAttribLocation(nodeProg, "a_elemType"),
      del: gl.getAttribLocation(nodeProg, "a_delay"),
      rand: gl.getAttribLocation(nodeProg, "a_rand"),
      colorType: gl.getAttribLocation(nodeProg, "a_colorType"),
      extra: gl.getAttribLocation(nodeProg, "a_extra"),
    };

    const nodeUniforms = {
      time: gl.getUniformLocation(nodeProg, "u_time"),
      isIntro: gl.getUniformLocation(nodeProg, "u_isIntro"),
      reducedMotion: gl.getUniformLocation(nodeProg, "u_reducedMotion"),
      colorBn: gl.getUniformLocation(nodeProg, "u_colorBn"),
      colorBa: gl.getUniformLocation(nodeProg, "u_colorBa"),
      circuitColor: gl.getUniformLocation(nodeProg, "u_circuitColor"),
      hasCircuit: gl.getUniformLocation(nodeProg, "u_hasCircuit"),
    };

    let animationFrameId: number;
    let startTime: number | null = null;
    let isVisible = true;
    let introSynced = false;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    function getThemeColors() {
      const isDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      if (isDark) {
        return {
          bp: hexToRgba("#8b80ff73"),
          bn: hexToRgba("#8b80ff"),
          bap: hexToRgba("#c6ff3d75"),
          ba: hexToRgba("#c6ff3d"),
        };
      }
      return {
        bp: hexToRgba("#5a4dff52"),
        bn: hexToRgba("#5a4dff"),
        bap: hexToRgba("#65a30d70"),
        ba: hexToRgba("#65a30d"),
      };
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    function render(now: number) {
      if (!isVisible) return;

      if (startTime === null) {
        startTime = now;
      }
      const elapsed = (now - startTime) / 1000;

      if (isIntro && !introSynced && elapsed >= 1.85) {
        introSynced = true;
        onSyncRef.current?.();
        onCompleteRef.current?.();
      }

      const colors = getThemeColors();
      const isReduced = reducedMotionQuery.matches ? 1.0 : 0.0;
      const circuitRgba = circuitColor ? hexToRgba(circuitColor) : [0, 0, 0, 0];
      const hasCircuit = circuitColor ? 1.0 : 0.0;

      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // 1. Draw Lines
      gl.useProgram(lineProg);
      gl.uniform1f(lineUniforms.time, elapsed);
      gl.uniform1f(lineUniforms.isIntro, isIntro ? 1.0 : 0.0);
      gl.uniform1f(lineUniforms.reducedMotion, isReduced);
      gl.uniform4fv(lineUniforms.colorBp, colors.bp);
      gl.uniform4fv(lineUniforms.colorBap, colors.bap);
      gl.uniform4fv(lineUniforms.circuitColor, circuitRgba);
      gl.uniform1f(lineUniforms.hasCircuit, hasCircuit);

      gl.bindBuffer(gl.ARRAY_BUFFER, lineVBO);
      const strideL = 9 * 4;
      gl.enableVertexAttribArray(lineAttribs.pos);
      gl.vertexAttribPointer(lineAttribs.pos, 2, gl.FLOAT, false, strideL, 0);
      gl.enableVertexAttribArray(lineAttribs.normal);
      gl.vertexAttribPointer(
        lineAttribs.normal,
        2,
        gl.FLOAT,
        false,
        strideL,
        2 * 4,
      );
      gl.enableVertexAttribArray(lineAttribs.arcLen);
      gl.vertexAttribPointer(
        lineAttribs.arcLen,
        1,
        gl.FLOAT,
        false,
        strideL,
        4 * 4,
      );
      gl.enableVertexAttribArray(lineAttribs.totalLen);
      gl.vertexAttribPointer(
        lineAttribs.totalLen,
        1,
        gl.FLOAT,
        false,
        strideL,
        5 * 4,
      );
      gl.enableVertexAttribArray(lineAttribs.del);
      gl.vertexAttribPointer(
        lineAttribs.del,
        1,
        gl.FLOAT,
        false,
        strideL,
        6 * 4,
      );
      gl.enableVertexAttribArray(lineAttribs.rand);
      gl.vertexAttribPointer(
        lineAttribs.rand,
        1,
        gl.FLOAT,
        false,
        strideL,
        7 * 4,
      );
      gl.enableVertexAttribArray(lineAttribs.colorType);
      gl.vertexAttribPointer(
        lineAttribs.colorType,
        1,
        gl.FLOAT,
        false,
        strideL,
        8 * 4,
      );

      gl.drawArrays(gl.TRIANGLES, 0, geometry.lineCount);

      // 2. Draw Nodes
      gl.useProgram(nodeProg);
      gl.uniform1f(nodeUniforms.time, elapsed);
      gl.uniform1f(nodeUniforms.isIntro, isIntro ? 1.0 : 0.0);
      gl.uniform1f(nodeUniforms.reducedMotion, isReduced);
      gl.uniform4fv(nodeUniforms.colorBn, colors.bn);
      gl.uniform4fv(nodeUniforms.colorBa, colors.ba);
      gl.uniform4fv(nodeUniforms.circuitColor, circuitRgba);
      gl.uniform1f(nodeUniforms.hasCircuit, hasCircuit);

      gl.bindBuffer(gl.ARRAY_BUFFER, nodeVBO);
      const strideN = 9 * 4;
      gl.enableVertexAttribArray(nodeAttribs.pos);
      gl.vertexAttribPointer(nodeAttribs.pos, 2, gl.FLOAT, false, strideN, 0);
      gl.enableVertexAttribArray(nodeAttribs.uv);
      gl.vertexAttribPointer(
        nodeAttribs.uv,
        2,
        gl.FLOAT,
        false,
        strideN,
        2 * 4,
      );
      gl.enableVertexAttribArray(nodeAttribs.elemType);
      gl.vertexAttribPointer(
        nodeAttribs.elemType,
        1,
        gl.FLOAT,
        false,
        strideN,
        4 * 4,
      );
      gl.enableVertexAttribArray(nodeAttribs.del);
      gl.vertexAttribPointer(
        nodeAttribs.del,
        1,
        gl.FLOAT,
        false,
        strideN,
        5 * 4,
      );
      gl.enableVertexAttribArray(nodeAttribs.rand);
      gl.vertexAttribPointer(
        nodeAttribs.rand,
        1,
        gl.FLOAT,
        false,
        strideN,
        6 * 4,
      );
      gl.enableVertexAttribArray(nodeAttribs.colorType);
      gl.vertexAttribPointer(
        nodeAttribs.colorType,
        1,
        gl.FLOAT,
        false,
        strideN,
        7 * 4,
      );
      gl.enableVertexAttribArray(nodeAttribs.extra);
      gl.vertexAttribPointer(
        nodeAttribs.extra,
        1,
        gl.FLOAT,
        false,
        strideN,
        8 * 4,
      );

      gl.drawArrays(gl.TRIANGLES, 0, geometry.nodeCount);

      animationFrameId = requestAnimationFrame(render);
    }

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const displayWidth = Math.max(1, Math.round((rect.width || 620) * dpr));
      const displayHeight = Math.max(1, Math.round((rect.height || 620) * dpr));

      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
      }
    };
    updateSize();

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const wasVisible = isVisible;
        isVisible = entry.isIntersecting;
        if (!wasVisible && isVisible) {
          animationFrameId = requestAnimationFrame(render);
        }
      },
      { threshold: 0.05 },
    );
    intersectionObserver.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      gl.deleteBuffer(lineVBO);
      gl.deleteBuffer(nodeVBO);
      gl.deleteProgram(lineProg);
      gl.deleteProgram(nodeProg);
    };
  }, [isIntro, circuitColor, svgText]);

  return (
    <canvas
      ref={canvasRef}
      id="brain-webgl"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "min(620px, 72vw)",
        aspectRatio: "1",
        transform: "translate(-50%, -50%)",
        opacity: 0.65,
        cursor: "pointer",
        WebkitMaskImage: "radial-gradient(circle, #000 80%, transparent 100%)",
        maskImage: "radial-gradient(circle, #000 80%, transparent 100%)",
        transition: "opacity 0.3s",
        pointerEvents: "auto",
      }}
    />
  );
}

const BrainWebGLCanvas = memo(BrainWebGLCanvasComponent);
export default BrainWebGLCanvas;
