import type { TeamMember } from "../../../types/content";
import MemberCard from "./MemberCard";
import styles from "./TeamSection.module.css";

interface MemberGridProps {
  members: readonly TeamMember[];
  columns?: number;
}

export default function MemberGrid({ members }: MemberGridProps) {
  return (
    <ul className={styles.members}>
      {members.map((member) => (
        <li key={member.id} className={styles.memberItem}>
          <MemberCard member={member} />
        </li>
      ))}
    </ul>
  );
}
