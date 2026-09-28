import { memo, useEffect, useRef, useState } from "react";

const CIRCUIT_PALETTE = ["#5a4dff", "#059669", "#0284c7", "#e11d48"] as const;

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
  const [svgContent, setSvgContent] = useState("");
  const [circuitColor, setCircuitColor] = useState<string | null>(null);
  const onSyncRef = useRef(onSync);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onSyncRef.current = onSync;
    onCompleteRef.current = onComplete;
  }, [onSync, onComplete]);

  useEffect(() => {
    let isMounted = true;
    fetch("/brain.svg")
      .then((res) => res.text())
      .then((text) => {
        if (isMounted) {
          setSvgContent(
            isIntro ? text.replace("<svg ", '<svg class="intro" ') : text,
          );
        }
      })
      .catch(() => {});
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
    const timer = setTimeout(notifyCompletion, 1850);
    return () => {
      clearTimeout(timer);
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
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

const BrainHeroBackground = memo(BrainHeroBackgroundComponent);
export default BrainHeroBackground;
