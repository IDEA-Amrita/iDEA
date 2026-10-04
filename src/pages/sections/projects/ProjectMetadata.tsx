import {
  SiPython,
  SiNodedotjs,
  SiDocker,
  SiGo,
  SiTypescript,
  SiReact,
  SiRust,
} from "react-icons/si";
import { BsCodeSquare } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Project } from "../../../types/content";
import styles from "./ProjectsSection.module.css";

const techIcons: Record<string, IconType> = {
  python: SiPython,
  "node.js": SiNodedotjs,
  nodejs: SiNodedotjs,
  node: SiNodedotjs,
  docker: SiDocker,
  go: SiGo,
  golang: SiGo,
  typescript: SiTypescript,
  react: SiReact,
  rust: SiRust,
  messfit: SiPython,
  nodeshare: SiNodedotjs,
  paystable: SiGo,
};

function formatMonth(value: `${number}-${number}`) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}-01T00:00:00Z`));
}

function formatTimeline(project: Project) {
  const { timeline } = project;
  const end =
    timeline.status === "ongoing" ? "Present" : formatMonth(timeline.completed);
  return `${formatMonth(timeline.started)} - ${end}`;
}

interface ProjectMetadataProps {
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  const primaryStack = project.frameworks[0] || "iDEA";
  const Icon =
    techIcons[project.id.toLowerCase()] ||
    techIcons[primaryStack.toLowerCase()] ||
    BsCodeSquare;

  return (
    <header className={styles.metadata}>
      <div
        className={styles.techBadge}
        role="img"
        aria-label={`${project.title} technology: ${primaryStack}`}
      >
        <div className={styles.techBadgeIcon}>
          <Icon aria-hidden="true" />
        </div>
        <span className={styles.techBadgeLabel}>{primaryStack}</span>
      </div>
      <div className={styles.metadataCopy}>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <p className={styles.projectLead}>
          {project.lead.name}, {project.lead.yearAndDepartment}
        </p>
        <p className={styles.timeline}>{formatTimeline(project)}</p>
      </div>
    </header>
  );
}
