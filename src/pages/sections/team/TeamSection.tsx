import texts from "../../../data/texts";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import FacultyGrid from "./FacultyGrid";
import styles from "./TeamSection.module.css";
import TeamAccordion from "./TeamAccordion";
import type { SectionNavigationProps } from "../../../types/navigation";

export default function TeamSection({
  onNavigateAlumni,
}: Partial<SectionNavigationProps> = {}) {
  return (
    <PageShell id="team" aria-labelledby="team-title">
      <SectionShell className={styles.section} aria-labelledby="team-title">
        <div className={styles.overview}>
          <div className={styles.intro}>
            <SectionTitle sectionId="team" id="team-title">
              {texts.team.title}
            </SectionTitle>
            <p className={styles.description} data-animate="team-desc">
              {texts.team.description}
            </p>
            <div className={styles.alumniCallout} data-animate="team-alumni">
              <p className={styles.alumniText}>
                Explore the past leadership and builders from previous batches.
              </p>
              <a
                href="/alumni"
                className={styles.alumniButton}
                aria-label="View Alumni"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigateAlumni) {
                    onNavigateAlumni();
                  } else {
                    window.location.href = "/alumni";
                  }
                }}
              >
                <span>Alumni</span>
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.alumniArrow}
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>
          <FacultyGrid />
        </div>
        <TeamAccordion />
      </SectionShell>
    </PageShell>
  );
}
