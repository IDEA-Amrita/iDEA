import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import texts from "../../../data/texts";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <PageShell id="about" aria-labelledby="about-title">
      <SectionShell className={styles.section} aria-labelledby="about-title">
        <div className={styles.content}>
          <SectionTitle sectionId="about" id="about-title">
            {texts.about.title}
          </SectionTitle>
          <p className={styles.copy} data-animate="about-copy">
            {texts.about.content}
          </p>
          <ul
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
          <img
            src="/logo_clear.webp"
            alt="iDEA - Integrated Development Environment of Amrita"
            className={styles.image}
            loading="eager"
            decoding="async"
          />
        </div>
      </SectionShell>
    </PageShell>
  );
}
