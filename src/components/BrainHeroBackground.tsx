import { memo, useEffect, useRef, useState } from "react";

const CIRCUIT_PALETTE = ["#8b80ff", "#059669", "#0284c7", "#e11d48"] as const;

let cachedSvgText: string | null = null;

interface Props {
  isIntro?: boolean;
  onSync?: () => void;
  onComplete?: () => void;
}

function BrainHeroBackgroundComponent({
  isIntro = false,
  onSync,
  onComplete,
}: Props) {
  const [svgContent, setSvgContent] = useState(() => {
    if (!cachedSvgText) return "";
    return isIntro
      ? cachedSvgText.replace("<svg ", '<svg class="intro" ')
      : cachedSvgText;
  });
  const [circuitColor, setCircuitColor] = useState<string | null>(null);
  const onSyncRef = useRef(onSync);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onSyncRef.current = onSync;
    onCompleteRef.current = onComplete;
  }, [onSync, onComplete]);

  useEffect(() => {
    let isMounted = true;
    if (!cachedSvgText) {
      fetch("/brain.svg")
        .then((res) => res.text())
        .then((text) => {
          cachedSvgText = text;
          if (isMounted) {
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
      style={{
        transform: "translateZ(0)",
        contain: "paint layout",
        ...(circuitColor
          ? ({
              "--bc": circuitColor,
              "--bn": circuitColor,
            } as React.CSSProperties)
          : {}),
      }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

const BrainHeroBackground = memo(BrainHeroBackgroundComponent);
export default BrainHeroBackground;
