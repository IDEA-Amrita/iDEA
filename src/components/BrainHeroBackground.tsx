import { lazy, memo, Suspense, useEffect, useRef, useState } from "react";

const BrainWebGLCanvas = lazy(() => import("./BrainWebGLCanvas"));

const CIRCUIT_PALETTE = ["#8b80ff", "#059669", "#0284c7", "#e11d48"] as const;

let cachedSvgText: string | null = null;

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

interface Props {
  isIntro?: boolean | undefined;
  onSync?: (() => void) | undefined;
  onComplete?: (() => void) | undefined;
}

function BrainHeroBackgroundComponent({
  isIntro = false,
  onSync,
  onComplete,
}: Props) {
  const [rawSvg, setRawSvg] = useState(() => cachedSvgText ?? "");
  const [svgContent, setSvgContent] = useState(() => {
    if (!cachedSvgText) return "";
    return isIntro
      ? cachedSvgText.replace("<svg ", '<svg class="intro" ')
      : cachedSvgText;
  });
  const [circuitColor, setCircuitColor] = useState<string | null>(null);
  const [useWebGL, setUseWebGL] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth > 768 && checkWebGLSupport();
  });

  const onSyncRef = useRef(onSync);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onSyncRef.current = onSync;
    onCompleteRef.current = onComplete;
  }, [onSync, onComplete]);

  useEffect(() => {
    const handleResize = () => {
      setUseWebGL(window.innerWidth > 768 && checkWebGLSupport());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (!cachedSvgText) {
      fetch("/brain.svg")
        .then((res) => res.text())
        .then((text) => {
          cachedSvgText = text;
          if (isMounted) {
            setRawSvg(text);
            setSvgContent(
              isIntro ? text.replace("<svg ", '<svg class="intro" ') : text,
            );
          }
        })
        .catch(() => {});
    }
    return () => {
      isMounted = false;
    };
  }, [isIntro]);

  useEffect(() => {
    const notifyCompletion = () => {
      onSyncRef.current?.();
      onCompleteRef.current?.();
    };
    if (!isIntro) {
      notifyCompletion();
      return;
    }
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
    const introDuration = isMobile ? 700 : 1850;
    const cleanupDuration = isMobile ? 850 : 2000;

    const timer = setTimeout(notifyCompletion, introDuration);
    const cleanupIntroTimer = setTimeout(() => {
      setSvgContent((prev) => prev.replace('class="intro" ', ""));
    }, cleanupDuration);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanupIntroTimer);
    };
  }, [isIntro]);

  const cycleCircuitColor = () => {
    setCircuitColor((current) => {
      const currentIndex = CIRCUIT_PALETTE.indexOf(
        current as (typeof CIRCUIT_PALETTE)[number],
      );
      const nextIndex = (currentIndex + 1) % CIRCUIT_PALETTE.length;
      return CIRCUIT_PALETTE[nextIndex] ?? CIRCUIT_PALETTE[0];
    });
  };

  return (
    <div
      aria-hidden="true"
      onClick={cycleCircuitColor}
      style={
        circuitColor
          ? ({
              "--bc": circuitColor,
              "--bn": circuitColor,
            } as React.CSSProperties)
          : undefined
      }
    >
      {useWebGL && rawSvg ? (
        <Suspense
          fallback={<div dangerouslySetInnerHTML={{ __html: svgContent }} />}
        >
          <BrainWebGLCanvas
            isIntro={isIntro}
            circuitColor={circuitColor}
            svgText={rawSvg}
            onClick={cycleCircuitColor}
            onSync={onSync}
            onComplete={onComplete}
          />
        </Suspense>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
      )}
    </div>
  );
}

const BrainHeroBackground = memo(BrainHeroBackgroundComponent);
export default BrainHeroBackground;
