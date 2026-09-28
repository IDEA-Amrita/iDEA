import { useState } from "react";
import Accordion from "../../../components/Accordion";
import { teamGroups, type TeamGroupId } from "../../../data/team";
import MemberGrid from "./MemberGrid";
import styles from "./TeamSection.module.css";

export default function TeamAccordion() {
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
    </div>
  );
}
