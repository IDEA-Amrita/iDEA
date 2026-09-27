import { useState } from "react";
import Accordion from "../../../components/Accordion";
import { teamGroups, type TeamGroupId } from "../../../data/team";
import MemberGrid from "./MemberGrid";
import styles from "./TeamSection.module.css";

interface TeamAccordionProps {
  onNavigateAlumni?: (() => void) | undefined;
}

export default function TeamAccordion({
  onNavigateAlumni,
}: TeamAccordionProps = {}) {
  const [activeGroupId, setActiveGroupId] = useState<TeamGroupId | null>(null);
  return (
    <div className={styles.directory}>
      <ul className={styles.accordionList}>
        {teamGroups.map((group) => (
          <li key={group.id}>
            <Accordion
              id={`team-${group.id}`}
              title={group.label}
              open={activeGroupId === group.id}
              onToggle={() => {
                setActiveGroupId((current) =>
                  current === group.id ? null : group.id,
                );
              }}
            >
              <MemberGrid members={group.members} columns={group.columns} />
            </Accordion>
          </li>
        ))}
      </ul>
      <div className={styles.alumniRow}>
        <a
          href="/alumni"
          className={styles.alumniButton}
          aria-label="View Alumni"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateAlumni) {
              onNavigateAlumni();
            } else {
              window.history.pushState({}, "", "/alumni");
              window.dispatchEvent(new PopStateEvent("popstate"));
              window.scrollTo(0, 0);
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
  );
}
