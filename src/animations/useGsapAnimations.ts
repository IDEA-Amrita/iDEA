import { useEffect } from "react";
import type { gsap as GSAP } from "gsap";
import type { ScrollTrigger as ScrollTriggerType } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../hooks/useReducedMotion";

interface GsapModule {
  gsap: typeof GSAP;
}

interface ScrollTriggerModule {
  ScrollTrigger: typeof ScrollTriggerType;
}

export function useGsapAnimations() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (
      reduceMotion ||
      typeof window === "undefined" ||
      import.meta.env.MODE === "test"
    ) {
      return;
    }

    let isDisposed = false;
    let ctx: { revert: () => void } | null = null;

    void Promise.all([
      import("gsap") as Promise<GsapModule>,
      import("gsap/ScrollTrigger") as Promise<ScrollTriggerModule>,
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (isDisposed) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // -------------------------------------------------------------
        // Section: About
        // -------------------------------------------------------------
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          const title = aboutSection.querySelector('[data-animate="title"]');
          const copy = aboutSection.querySelector(
            '[data-animate="about-copy"]',
          );
          const highlights = aboutSection.querySelectorAll(
            '[data-animate="about-highlights"] li',
          );
          const image = aboutSection.querySelector(
            '[data-animate="about-image"]',
          );

          const elements = [
            title,
            copy,
            ...Array.from(highlights),
            image,
          ].filter(Boolean);

          gsap.set(elements, { opacity: 0, y: 28 });

          ScrollTrigger.create({
            trigger: aboutSection,
            start: "top 80%",
            end: "bottom 15%",
            onEnter: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                overwrite: "auto",
              });
            },
            onLeave: () => {
              gsap.to(elements, {
                opacity: 0.1,
                y: -24,
                duration: 0.45,
                stagger: 0.04,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
            onEnterBack: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.06,
                ease: "power2.out",
                overwrite: "auto",
              });
            },
            onLeaveBack: () => {
              gsap.to(elements, {
                opacity: 0,
                y: 28,
                duration: 0.4,
                stagger: 0.04,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
          });
        }

        // -------------------------------------------------------------
        // Section: Projects
        // -------------------------------------------------------------
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const title = projectsSection.querySelector('[data-animate="title"]');
          const layout = projectsSection.querySelector(
            '[data-animate="projects-layout"]',
          );
          const elements = [title, layout].filter(Boolean);

          gsap.set(elements, { opacity: 0, y: 32 });

          ScrollTrigger.create({
            trigger: projectsSection,
            start: "top 78%",
            end: "bottom 15%",
            onEnter: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power2.out",
                overwrite: "auto",
              });
            },
            onLeave: () => {
              gsap.to(elements, {
                opacity: 0.1,
                y: -28,
                duration: 0.45,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
            onEnterBack: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.65,
                ease: "power2.out",
                overwrite: "auto",
              });
            },
            onLeaveBack: () => {
              gsap.to(elements, {
                opacity: 0,
                y: 32,
                duration: 0.4,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
          });
        }

        // -------------------------------------------------------------
        // Section: Team
        // -------------------------------------------------------------
        const teamSection = document.getElementById("team");
        if (teamSection) {
          const title = teamSection.querySelector('[data-animate="title"]');
          const desc = teamSection.querySelector('[data-animate="team-desc"]');
          const faculty = teamSection.querySelector("article");
          const accordion =
            teamSection.querySelector('[role="region"]') ||
            teamSection.querySelector("div:last-child");

          const elements = [title, desc, faculty, accordion].filter(Boolean);

          gsap.set(elements, { opacity: 0, y: 30 });

          ScrollTrigger.create({
            trigger: teamSection,
            start: "top 80%",
            end: "bottom 15%",
            onEnter: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.08,
                ease: "power3.out",
                overwrite: "auto",
              });
            },
            onLeave: () => {
              gsap.to(elements, {
                opacity: 0.15,
                y: -24,
                duration: 0.45,
                stagger: 0.04,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
            onEnterBack: () => {
              gsap.to(elements, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.06,
                ease: "power3.out",
                overwrite: "auto",
              });
            },
            onLeaveBack: () => {
              gsap.to(elements, {
                opacity: 0,
                y: 30,
                duration: 0.4,
                stagger: 0.04,
                ease: "power2.in",
                overwrite: "auto",
              });
            },
          });
        }

        // -------------------------------------------------------------
        // Section: Contribute
        // -------------------------------------------------------------
        const contributeSection = document.getElementById("contribute");
        if (contributeSection) {
          const cards = contributeSection.querySelectorAll(
            '[data-animate="contribute-card"]',
          );
          const cardLeft = cards[0];
          const cardRight = cards[1];

          if (cardLeft) gsap.set(cardLeft, { opacity: 0, x: -28, y: 16 });
          if (cardRight) gsap.set(cardRight, { opacity: 0, x: 28, y: 16 });

          ScrollTrigger.create({
            trigger: contributeSection,
            start: "top 80%",
            end: "bottom 15%",
            onEnter: () => {
              if (cardLeft) {
                gsap.to(cardLeft, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 0.75,
                  ease: "expo.out",
                  overwrite: "auto",
                });
              }
              if (cardRight) {
                gsap.to(cardRight, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 0.75,
                  ease: "expo.out",
                  delay: 0.08,
                  overwrite: "auto",
                });
              }
            },
            onLeave: () => {
              if (cardLeft)
                gsap.to(cardLeft, {
                  opacity: 0.1,
                  x: -16,
                  duration: 0.4,
                  overwrite: "auto",
                });
              if (cardRight)
                gsap.to(cardRight, {
                  opacity: 0.1,
                  x: 16,
                  duration: 0.4,
                  overwrite: "auto",
                });
            },
            onEnterBack: () => {
              if (cardLeft)
                gsap.to(cardLeft, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 0.6,
                  ease: "expo.out",
                  overwrite: "auto",
                });
              if (cardRight)
                gsap.to(cardRight, {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  duration: 0.6,
                  ease: "expo.out",
                  overwrite: "auto",
                });
            },
            onLeaveBack: () => {
              if (cardLeft)
                gsap.to(cardLeft, {
                  opacity: 0,
                  x: -28,
                  y: 16,
                  duration: 0.4,
                  overwrite: "auto",
                });
              if (cardRight)
                gsap.to(cardRight, {
                  opacity: 0,
                  x: 28,
                  y: 16,
                  duration: 0.4,
                  overwrite: "auto",
                });
            },
          });
        }

        // -------------------------------------------------------------
        // Apple HIG Micro-Interactions: Desktop Hover & Tactile Springs
        // -------------------------------------------------------------
        const isPointerFine = window.matchMedia(
          "(hover: hover) and (pointer: fine)",
        ).matches;

        if (isPointerFine) {
          // 1. Tactile Button Depress
          const buttons = document.querySelectorAll<HTMLElement>(
            "button, .button, a[role='button']",
          );
          buttons.forEach((btn) => {
            const onPointerDown = () => {
              gsap.to(btn, {
                scale: 0.97,
                duration: 0.12,
                ease: "power2.out",
                overwrite: "auto",
              });
            };
            const onPointerUp = () => {
              gsap.to(btn, {
                scale: 1,
                duration: 0.35,
                ease: "elastic.out(1, 0.4)",
                overwrite: "auto",
              });
            };
            btn.addEventListener("pointerdown", onPointerDown);
            btn.addEventListener("pointerup", onPointerUp);
            btn.addEventListener("pointerleave", onPointerUp);
          });

          // 2. Member Card 3D Perspective Tilt
          const memberCards = document.querySelectorAll<HTMLElement>(
            '[data-animate="member-card"]',
          );
          memberCards.forEach((card) => {
            const onMouseMove = (e: MouseEvent) => {
              const rect = card.getBoundingClientRect();
              const xRel = (e.clientX - rect.left) / rect.width - 0.5;
              const yRel = (e.clientY - rect.top) / rect.height - 0.5;
              gsap.to(card, {
                rotationY: xRel * 5,
                rotationX: -yRel * 5,
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
          });

          // 3. Diagonal Arrow Micro-Glide
          const ctaButtons = document.querySelectorAll<HTMLElement>(
            '[data-animate="contribute-card"] button, #projects button',
          );
          ctaButtons.forEach((btn) => {
            const arrow = btn.querySelector("svg");
            if (!arrow) return;
            const onEnter = () => {
              gsap.to(arrow, {
                x: 3,
                y: -3,
                duration: 0.2,
                ease: "power2.out",
                overwrite: "auto",
              });
            };
            const onLeave = () => {
              gsap.to(arrow, {
                x: 0,
                y: 0,
                duration: 0.35,
                ease: "elastic.out(1, 0.4)",
                overwrite: "auto",
              });
            };
            btn.addEventListener("mouseenter", onEnter);
            btn.addEventListener("mouseleave", onLeave);
          });
        }
      });
    });

    return () => {
      isDisposed = true;
      if (ctx) {
        ctx.revert();
      }
    };
  }, [reduceMotion]);
}

export default useGsapAnimations;
