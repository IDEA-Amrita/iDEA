import ImagePlaceholder from "../../../components/ImagePlaceholder";
import type { Project } from "../../../types/content";
import styles from "./ProjectsSection.module.css";

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
  return (
    <header className={styles.metadata}>
      <ImagePlaceholder
        glyph={project.title.slice(0, 1)}
        className={styles.preview}
        label={`${project.title} brand illustration`}
      />
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
