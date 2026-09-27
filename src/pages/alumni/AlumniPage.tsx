import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { alumniBatches, alumniData, type AlumniBatch } from "../../data/alumni";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import classNames from "../../utils/classNames";
import styles from "./AlumniPage.module.css";

interface AlumniPageProps {
  onBack?: (() => void) | undefined;
}

export default function AlumniPage({ onBack }: AlumniPageProps = {}) {
  const [selectedBatch, setSelectedBatch] = useState<AlumniBatch>("2025-26");
  const members = alumniData[selectedBatch] ?? [];

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.pushState({}, "", "/#team");
      window.dispatchEvent(new PopStateEvent("popstate"));
      const teamSection = document.getElementById("team");
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <main className={styles.page} id="alumni-content">
        <header className={styles.topBar}>
          <button
            type="button"
            className={styles.backButton}
            onClick={handleBack}
            aria-label="Back to Core Team"
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Core Team</span>
          </button>

          <a href="/#home" className={styles.brandLink} onClick={(e) => {
            e.preventDefault();
            if (onBack) {
              window.history.pushState({}, "", "/#home");
              window.dispatchEvent(new PopStateEvent("popstate"));
            } else {
              window.location.href = "/#home";
            }
          }}>
            iDEA
          </a>

          <ThemeToggle standalone />
        </header>

        <div className={styles.content}>
          <section className={styles.header} aria-labelledby="alumni-title">
            <h1 id="alumni-title" className={styles.title}>
              Alumni
            </h1>
            <p className={styles.description}>
              Celebrating the past leadership, builders, and contributors who
              helped shape iDEA into what it is today.
            </p>
          </section>

          <section className={styles.pillsSection} aria-label="Filter by batch year">
            <p className={styles.pillsLabel}>Select Batch</p>
            <div className={styles.pillsList} role="tablist" aria-label="Alumni batches">
              {alumniBatches.map((batch) => {
                const isSelected = selectedBatch === batch;
                return (
                  <button
                    key={batch}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={classNames(
                      styles.pill,
                      isSelected && styles.pillActive,
                    )}
                    onClick={() => {
                      setSelectedBatch(batch);
                    }}
                  >
                    {batch}
                  </button>
                );
              })}
            </div>
          </section>

          <section className={styles.gridSection} aria-label={`Alumni for ${selectedBatch}`}>
            <div className={styles.gridMeta}>
              <span>{selectedBatch} BATCH</span>
              <span>{members.length} MEMBERS</span>
            </div>

            <div className={styles.grid}>
              {members.map((member) => {
                const pending = member.status === "pending";
                return (
                  <article
                    key={member.id}
                    className={styles.card}
                    data-state={member.status}
                  >
                    <div className={styles.imageWrapper}>
                      {pending ? (
                        <span className={styles.avatarPlaceholder} aria-hidden="true">
                          <BsPerson />
                        </span>
                      ) : (
                        <img
                          className={styles.avatarPhoto}
                          src={member.photo}
                          alt=""
                          loading="lazy"
                        />
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <p className={styles.memberName}>{member.name}</p>
                      <p className={styles.memberRole}>{member.role}</p>
                      <div className={styles.cardFooter}>
                        <span className={styles.memberBatch}>{member.batch}</span>
                        {(member.linkedin || member.github) && (
                          <div className={styles.socialLinks}>
                            {member.linkedin && (
                              <a
                                href={member.linkedin}
                                className={styles.socialLink}
                                aria-label={`${member.name}'s LinkedIn`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiOutlineLinkedin aria-hidden="true" />
                              </a>
                            )}
                            {member.github && (
                              <a
                                href={member.github}
                                className={styles.socialLink}
                                aria-label={`${member.name}'s GitHub`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <AiFillGithub aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
