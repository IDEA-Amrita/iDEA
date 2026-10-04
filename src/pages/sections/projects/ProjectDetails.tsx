import { AiFillGithub } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import { ButtonLink } from "../../../components/Button";
import type { Project } from "../../../types/content";
import ProjectMetadata from "./ProjectMetadata";
import styles from "./ProjectsSection.module.css";
import TechnologyList from "./TechnologyList";

interface ProjectDetailsProps {
  project: Project;
  isOpen?: boolean;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className={styles.detailsCard}>
      <ProjectMetadata project={project} />
      <div className={styles.detailsBody}>
        <p className={styles.summary}>{project.description}</p>
        <TechnologyList frameworks={project.frameworks} tags={project.tags} />
        <div className={styles.projectActions}>
          <ButtonLink
            href={project.contacts.github.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.title} on GitHub`}
          >
            <AiFillGithub aria-hidden="true" />
            <span>View on GitHub</span>
            <BsArrowUpRight aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
