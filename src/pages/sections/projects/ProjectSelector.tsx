import texts from "../../../data/texts";
import Accordion from "../../../components/Accordion";
import SectionTitle from "../../../components/SectionTitle";
import type projectRecords from "../../../data/projects";
import type { ProjectId } from "../../../data/projects";
import ProjectDetails from "./ProjectDetails";
import styles from "./ProjectsSection.module.css";

interface ProjectSelectorProps {
  activeProjectId: ProjectId | null;
  onSelect: (projectId: ProjectId | null) => void;
  projects: typeof projectRecords;
}

export default function ProjectSelector({
  activeProjectId,
  onSelect,
  projects,
}: ProjectSelectorProps) {
  return (
    <div className={styles.selector}>
      <SectionTitle sectionId="projects" id="projects-title">
        {texts.projects.title}
      </SectionTitle>
      <p className={styles.sectionDescription}>{texts.projects.description}</p>
      <ul className={styles.projectList}>
        {projects.map((project) => {
          const selected = project.id === activeProjectId;
          return (
            <li key={project.id}>
              <Accordion
                id={`project-${project.id}`}
                title={project.title}
                open={selected}
                onToggle={() => {
                  onSelect(selected ? null : project.id);
                }}
              >
                <ProjectDetails
                  key={project.id}
                  project={project}
                  isOpen={selected}
                />
              </Accordion>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
