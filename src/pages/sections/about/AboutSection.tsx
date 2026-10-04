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
    isUpward: boolean;
  } | null>(null);

  useEffect(() => {
    function updateConnector() {
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
      const startY = hRect.bottom - sRect.top;
      const endX = lRect.left - sRect.left;
      const endY = lRect.top - sRect.top + 1.5;

      const width = endX - startX;
      const deltaY = startY - endY;
      const height = Math.abs(deltaY);

      if (width > 5 && height > 2) {
        setConnector({
          width,
          height,
          left: startX,
          top: Math.min(startY, endY),
          isUpward: deltaY > 0,
        });
      } else {
        setConnector(null);
      }
    }

    updateConnector();
    window.addEventListener("resize", updateConnector);
    const observer = new ResizeObserver(updateConnector);
    if (highlightsRef.current) observer.observe(highlightsRef.current);
    if (lineRef.current) observer.observe(lineRef.current);

    return () => {
      window.removeEventListener("resize", updateConnector);
      observer.disconnect();
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
              d={
                connector.isUpward
                  ? [
                      "M 0",
                      (connector.height - 1.5).toFixed(1),
                      "C",
                      (connector.width * 0.45).toFixed(1),
                      (connector.height - 1.5).toFixed(1),
                      ",",
                      (connector.width * 0.55).toFixed(1),
                      "1.5 ,",
                      connector.width.toFixed(1),
                      "1.5",
                    ].join(" ")
                  : [
                      "M 0 1.5 C",
                      (connector.width * 0.45).toFixed(1),
                      "1.5 ,",
                      (connector.width * 0.55).toFixed(1),
                      (connector.height - 1.5).toFixed(1),
                      ",",
                      connector.width.toFixed(1),
                      (connector.height - 1.5).toFixed(1),
                    ].join(" ")
              }
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
