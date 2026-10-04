import { useState } from "react";
import type { Project } from "../../../types/content";
import ProjectContactActions from "./ProjectContactActions";
import ProjectMetadata from "./ProjectMetadata";
import styles from "./ProjectsSection.module.css";
import TechnologyList from "./TechnologyList";

interface ProjectDetailsProps {
  project: Project;
  isOpen?: boolean;
}

export default function ProjectDetails({
  project,
  isOpen = true,
}: ProjectDetailsProps) {
  const [contactsOpen, setContactsOpen] = useState(false);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (prevIsOpen !== isOpen) {
    setPrevIsOpen(isOpen);
    if (!isOpen) {
      setContactsOpen(false);
    }
  }

  const showContacts = isOpen && contactsOpen;

  return (
    <article className={styles.detailsCard}>
      <ProjectMetadata project={project} />
      <div className={styles.detailsBody}>
        <p className={styles.summary}>{project.description}</p>
        <TechnologyList frameworks={project.frameworks} tags={project.tags} />
        <div className={styles.projectActions}>
          {/* <TypeformButton
            formId={formIds.joinProject}
            label={`Join ${project.title}`}
            variant="compact"
            hidden={{ project: project.title, project_id: project.id }}
          >
            Join this project <BsArrowUpRight aria-hidden="true" />
          </TypeformButton> */}
          <ProjectContactActions
            isOpen={showContacts}
            project={project}
            onToggle={() => {
              setContactsOpen((current) => (isOpen ? !current : true));
            }}
          />
        </div>
      </div>
    </article>
  );
}
