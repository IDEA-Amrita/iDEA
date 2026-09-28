import { useState } from "react";
import { PageShell, SectionShell } from "../../../components/Layout";
import projects, { type ProjectId } from "../../../data/projects";
import ProjectSelector from "./ProjectSelector";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId | null>(
    projects[0].id,
  );
  const latestYear = Math.max(
    ...projects.map(({ timeline }) => Number(timeline.started.slice(0, 4))),
  );
  const activeProject = projects.find(({ id }) => id === activeProjectId);

  return (
    <PageShell id="projects" aria-labelledby="projects-title">
      <SectionShell className={styles.section} aria-labelledby="projects-title">
        <div className={styles.layout} data-animate="projects-layout">
          <div className={styles.period}>
            <p className={styles.year}>Latest project intake · {latestYear}</p>
          </div>
          <div className={styles.workspace}>
            <p role="status" className={styles.announcement}>
              {activeProject
                ? `Selected project: ${activeProject.title}`
                : "All projects collapsed"}
            </p>
            <ProjectSelector
              activeProjectId={activeProjectId}
              onSelect={setActiveProjectId}
              projects={projects}
            />
          </div>
        </div>
      </SectionShell>
    </PageShell>
  );
}
