import type { Project } from "../../../types/content";
import styles from "./ProjectsSection.module.css";

interface TechnologyListProps {
  frameworks: Project["frameworks"];
  tags: Project["tags"];
}

export default function TechnologyList({
  frameworks,
  tags,
}: TechnologyListProps) {
  return (
    <>
      {frameworks.length > 0 && (
        <>
          <p className={styles.technologyHeading}>Built Using</p>
          <p className={styles.technologyNames}>{frameworks.join(", ")}</p>
        </>
      )}
      <ul className={styles.tags} aria-label="Project technologies">
        {tags.map((tag) => (
          <li className={styles.tag} key={tag}>
            #{tag}
          </li>
        ))}
      </ul>
    </>
  );
}
