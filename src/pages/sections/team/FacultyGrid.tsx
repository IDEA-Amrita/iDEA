import { BsPerson } from "react-icons/bs";
import texts from "../../../data/texts";
import faculty from "../../../data/faculty";
import type { FacultyMember } from "../../../types/content";
import styles from "./TeamSection.module.css";

const facultyList: readonly FacultyMember[] = faculty;

export default function FacultyGrid() {
  return (
    <aside className={styles.facultySection} aria-labelledby="faculty-title">
      <span className={styles.facultyHeading} id="faculty-title">
        {texts.team.facultyTitle}
      </span>
      <div className={styles.facultyGrid}>
        {facultyList.map((member) => {
          const isPending = member.status === "pending";
          const photo = "photo" in member ? member.photo : undefined;

          return (
            <article
              key={member.id}
              className={styles.facultyCard}
              data-animate="member-card"
            >
              <div className={styles.facultyImageWrapper}>
                {isPending || !photo ? (
                  <span className={styles.pendingAvatar} aria-hidden="true">
                    <BsPerson />
                  </span>
                ) : (
                  <img
                    className={styles.facultyPhoto}
                    src={photo}
                    alt=""
                    loading="lazy"
                  />
                )}
              </div>
              <div className={styles.facultyMeta}>
                <p className={styles.facultyName}>{member.name}</p>
                <p className={styles.facultyRole}>{member.designation}</p>
              </div>
            </article>
          );
        })}
      </div>
    </aside>
  );
}
