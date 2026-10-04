import { useEffect, useRef, useState } from "react";
import type { gsap as GSAP } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import { BsPerson } from "react-icons/bs";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { alumniBatches, alumniData, type AlumniBatch } from "../../data/alumni";
import Footer from "../../components/Footer";
import ThemeToggle from "../../components/ThemeToggle";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import classNames from "../../utils/classNames";
import styles from "./AlumniPage.module.css";

interface GsapModule {
  gsap: typeof GSAP;
}

interface ScrollTriggerModule {
  ScrollTrigger: typeof ScrollTriggerType;
}

interface AlumniPageProps {
  onBack?: (() => void) | undefined;
  onNavigateHome?: (() => void) | undefined;
}

interface AlumniAvatarProps {
  src?: string | undefined;
  alt: string;
}

function AlumniAvatar({ src, alt }: AlumniAvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  if (!src) return null;

  return (
    <div
      className={styles.imageWrapper}
      data-loaded={isLoaded ? "true" : undefined}
    >
      <img
        ref={imgRef}
        className={styles.avatarPhoto}
        src={src}
        alt={alt}
        loading="lazy"
        data-loaded={isLoaded ? "true" : undefined}
        onLoad={() => {
          setIsLoaded(true);
        }}
      />
    </div>
  );
}

export default function AlumniPage({
  onBack,
  onNavigateHome,
}: AlumniPageProps = {}) {
  const [selectedBatch, setSelectedBatch] = useState<AlumniBatch>("2025-26");
  const members = alumniData[selectedBatch] ?? [];
  const pageRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (
      reduceMotion ||
      typeof window === "undefined" ||
      !pageRef.current ||
      import.meta.env.MODE === "test"
    ) {
      return;
    }

    let isDisposed = false;
    let ctx: { revert: () => void } | null = null;
    const cleanupListeners: Array<() => void> = [];

    void Promise.all([
      import("gsap") as Promise<GsapModule>,
      import("gsap/ScrollTrigger") as Promise<ScrollTriggerModule>,
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (isDisposed) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // 1. Staggered reveal for Header, Pills, and Grid Metadata
        const topBar = pageRef.current?.querySelector(
          styles.topBar ? `.${styles.topBar}` : "header",
        );
        const header = pageRef.current?.querySelector(
          styles.header ? `.${styles.header}` : "section",
        );
        const pills = pageRef.current?.querySelector(
          styles.pillsSection ? `.${styles.pillsSection}` : "div",
        );
        const gridMeta = pageRef.current?.querySelector(
          styles.gridMeta ? `.${styles.gridMeta}` : "div",
        );

        const introElements = [topBar, header, pills, gridMeta].filter(
          (el): el is HTMLElement => Boolean(el),
        );

        if (introElements.length) {
          gsap.fromTo(
            introElements,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              overwrite: "auto",
            },
          );
        }

        // 2. ScrollTrigger batch animation for Alumni Cards
        const cardSelector = styles.card ? `.${styles.card}` : "article";
        const cards =
          pageRef.current?.querySelectorAll<HTMLElement>(cardSelector);
        if (!cards || !cards.length) return;

        // Set initial hidden state for cards
        gsap.set(cards, { opacity: 0, y: 36, scale: 0.96 });

        ScrollTrigger.batch(cards, {
          start: "top 88%",
          end: "bottom 12%",
          interval: 0.08,
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.65,
              stagger: 0.07,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onLeave: (batch) => {
            gsap.to(batch, {
              opacity: 0.2,
              y: -20,
              scale: 0.98,
              duration: 0.4,
              stagger: 0.03,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
          onEnterBack: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.55,
              stagger: 0.05,
              ease: "power3.out",
              overwrite: "auto",
            });
          },
          onLeaveBack: (batch) => {
            gsap.to(batch, {
              opacity: 0,
              y: 36,
              scale: 0.96,
              duration: 0.35,
              stagger: 0.03,
              ease: "power2.in",
              overwrite: "auto",
            });
          },
        });

        // 3. Apple-grade 3D Card Hover micro-interaction on fine-pointer devices
        const isPointerFine = window.matchMedia(
          "(hover: hover) and (pointer: fine)",
        ).matches;

        if (isPointerFine) {
          cards.forEach((card) => {
            const onMouseMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const xRel = (e.clientX - rect.left) / rect.width - 0.5;
              const yRel = (e.clientY - rect.top) / rect.height - 0.5;
              gsap.to(card, {
                rotationY: xRel * 6,
                rotationX: -yRel * 6,
                transformPerspective: 800,
                duration: 0.25,
                ease: "power1.out",
                overwrite: "auto",
              });
            };
            const onMouseLeave = () => {
              gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.45,
                ease: "power2.out",
                overwrite: "auto",
              });
            };
            card.addEventListener("mousemove", onMouseMove);
            card.addEventListener("mouseleave", onMouseLeave);
            cleanupListeners.push(() => {
              card.removeEventListener("mousemove", onMouseMove);
              card.removeEventListener("mouseleave", onMouseLeave);
            });
          });
        }

        ScrollTrigger.refresh();
      }, pageRef);
    });

    return () => {
      isDisposed = true;
      cleanupListeners.forEach((cleanup) => {
        cleanup();
      });
      if (ctx) {
        ctx.revert();
      }
    };
  }, [selectedBatch, reduceMotion]);

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.location.href = "/#team";
    }
  };

  const handleHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else if (onBack) {
      onBack();
    } else {
      window.location.href = "/#home";
    }
  };

  return (
    <>
      <main ref={pageRef} className={styles.page} id="alumni-content">
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

          <a href="/#home" className={styles.brandLink} onClick={handleHome}>
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

          <section
            className={styles.pillsSection}
            aria-label="Filter by batch year"
          >
            <p className={styles.pillsLabel}>Select Batch</p>
            <div
              className={styles.pillsList}
              role="tablist"
              aria-label="Alumni batches"
            >
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

          <section
            className={styles.gridSection}
            aria-label={`Alumni for ${selectedBatch}`}
          >
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
                    {pending ? (
                      <div className={styles.imageWrapper}>
                        <span
                          className={styles.avatarPlaceholder}
                          aria-hidden="true"
                        >
                          <BsPerson />
                        </span>
                      </div>
                    ) : (
                      <AlumniAvatar src={member.photo} alt={member.name} />
                    )}
                    <div className={styles.cardContent}>
                      <p className={styles.memberName}>{member.name}</p>
                      <p className={styles.memberRole}>{member.role}</p>
                      <div className={styles.cardFooter}>
                        <span className={styles.memberBatch}>
                          {member.batch}
                        </span>
                        {/* {(member.linkedin || member.github) && (
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
                        )} */}
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
