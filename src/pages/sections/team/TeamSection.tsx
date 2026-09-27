import texts from "../../../data/texts";
import { useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import { PageShell, SectionShell } from "../../../components/Layout";
import SectionTitle from "../../../components/SectionTitle";
import FacultyGrid from "./FacultyGrid";
import styles from "./TeamSection.module.css";
import TeamAccordion from "./TeamAccordion";
import type { SectionNavigationProps } from "../../../types/navigation";

export default function TeamSection({
  onNavigateAlumni,
}: Partial<SectionNavigationProps> = {}) {
  const reduceMotion = useReducedMotion();

  return (
    <PageShell id="team" aria-labelledby="team-title">
      <SectionShell className={styles.section} aria-labelledby="team-title">
        <div className={styles.overview}>
          <div className={styles.intro}>
            <SectionTitle sectionId="team" id="team-title">
              {texts.team.title}
            </SectionTitle>
            <m.p
              className={styles.description}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: reduceMotion ? 0 : 0.28,
                ease: "easeOut",
              }}
            >
              {texts.team.description}
            </m.p>
          </div>
          <FacultyGrid />
        </div>
        <TeamAccordion onNavigateAlumni={onNavigateAlumni} />
      </SectionShell>
    </PageShell>
  );
}
