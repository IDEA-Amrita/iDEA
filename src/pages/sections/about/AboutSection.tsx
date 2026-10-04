import { useEffect, useRef, useState } from "react";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import texts from "../../../data/texts";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLUListElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const [connector, setConnector] = useState<{
    width: number;
    height: number;
    left: number;
    top: number;
    pathD: string;
  } | null>(null);

  const updateConnector = () => {
    if (!sectionRef.current || !highlightsRef.current || !lineRef.current)
      return;

    if (window.innerWidth < 896) {
      setConnector(null);
      return;
    }

    const sRect = sectionRef.current.getBoundingClientRect();
    const hRect = highlightsRef.current.getBoundingClientRect();
    const lRect = lineRef.current.getBoundingClientRect();

    const startX = hRect.right - sRect.left;
    const endX = lRect.left - sRect.left;
    const width = endX - startX;

    // Center of 3px bottom border of highlights
    const hCenterY = hRect.bottom - sRect.top - 1.5;
    // Center of 3px pedestal line
    const lCenterY = lRect.top - sRect.top + 1.5;

    const deltaY = lCenterY - hCenterY;
    const height = Math.max(3, Math.abs(deltaY) + 3);
    const top = Math.min(hCenterY, lCenterY) - 1.5;

    if (
      !Number.isFinite(width) ||
      width <= 0 ||
      !Number.isFinite(startX) ||
      !Number.isFinite(top) ||
      !Number.isFinite(height)
    ) {
      setConnector(null);
      return;
    }

    const widthStr = width.toFixed(1);
    let pathD = "";
    if (Math.abs(deltaY) < 1) {
      pathD = `M 0 1.5 L ${widthStr} 1.5`;
    } else if (deltaY > 0) {
      const yStart = "1.5";
      const yEnd = (height - 1.5).toFixed(1);
      const cX = (width * 0.5).toFixed(1);
      pathD = `M 0 ${yStart} C ${cX} ${yStart}, ${cX} ${yEnd}, ${widthStr} ${yEnd}`;
    } else {
      const yStart = (height - 1.5).toFixed(1);
      const yEnd = "1.5";
      const cX = (width * 0.5).toFixed(1);
      pathD = `M 0 ${yStart} C ${cX} ${yStart}, ${cX} ${yEnd}, ${widthStr} ${yEnd}`;
    }

    setConnector({
      width,
      height,
      left: startX,
      top,
      pathD,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateConnector);
    window.addEventListener("scroll", updateConnector, { passive: true });

    if (typeof document !== "undefined" && "fonts" in document) {
      void document.fonts.ready.then(updateConnector).catch(() => {});
    }

    const observer = new ResizeObserver(updateConnector);
    if (sectionRef.current) observer.observe(sectionRef.current);
    if (highlightsRef.current) observer.observe(highlightsRef.current);
    if (lineRef.current) observer.observe(lineRef.current);

    let rafId: number;
    let frames = 0;
    const tick = () => {
      updateConnector();
      frames += 1;
      if (frames < 60) {
        rafId = requestAnimationFrame(tick);
      }
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", updateConnector);
      window.removeEventListener("scroll", updateConnector);
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <PageShell id="about" aria-labelledby="about-title">
      <SectionShell
        ref={sectionRef}
        className={styles.section}
        aria-labelledby="about-title"
      >
        <div className={styles.content}>
          <SectionTitle sectionId="about" id="about-title">
            {texts.about.title}
          </SectionTitle>
          <p className={styles.copy} data-animate="about-copy">
            {texts.about.content}
          </p>
          <ul
            ref={highlightsRef}
            className={styles.highlights}
            aria-label="What defines iDEA"
            data-animate="about-highlights"
          >
            {texts.about.highlights.map((highlight, index) => (
              <li key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.imageWrapper} data-animate="about-image">
          <div className={styles.visualStage}>
            <div className={styles.logoFrame}>
              <img
                src="/logo_clear.webp?v=2"
                alt="iDEA - Integrated Development Environment of Amrita"
                className={styles.image}
                loading="eager"
                decoding="async"
                onLoad={updateConnector}
              />
            </div>
            <div className={styles.pedestal} aria-hidden="true">
              <span ref={lineRef} className={styles.pedestalLine} />
              <div className={styles.pedestalMeta}>
                <span className={styles.pedestalTag}>@Amrita CBE</span>
              </div>
            </div>
          </div>
        </div>

        {connector && (
          <svg
            className={styles.dynamicConnector}
            style={{
              left: connector.left,
              top: connector.top,
              width: connector.width,
              height: connector.height,
            }}
            viewBox={[0, 0, connector.width, connector.height].join(" ")}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d={connector.pathD}
              stroke="var(--color-border)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        )}
      </SectionShell>
    </PageShell>
  );
}
