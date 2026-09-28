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
          </div>
          <FacultyGrid />
        </div>
        <TeamAccordion onNavigateAlumni={onNavigateAlumni} />
      </SectionShell>
    </PageShell>
  );
}
