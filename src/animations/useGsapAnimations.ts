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
    let teardownListeners: (() => void) | null = null;

    void Promise.all([
      import("gsap") as Promise<GsapModule>,
      import("gsap/ScrollTrigger") as Promise<ScrollTriggerModule>,
    ]).then(([gsapModule, scrollTriggerModule]) => {
      if (isDisposed) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      const cleanups: Array<() => void> = [];
      const pendingFrames = new Set<number>();
      const listen = (
        el: HTMLElement,
        type: string,
        handler: EventListener,
      ) => {
        el.addEventListener(type, handler);
        cleanups.push(() => {
          el.removeEventListener(type, handler);
        });
      };
      teardownListeners = () => {
        cleanups.forEach((fn) => {
          fn();
        });
        cleanups.length = 0;
        pendingFrames.forEach((id) => {
          window.cancelAnimationFrame(id);
        });
        pendingFrames.clear();
      };

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
            once: true,
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
            once: true,
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
          });
        }

        // -------------------------------------------------------------
        // Section: Team
        // -------------------------------------------------------------
        const teamSection = document.getElementById("team");
        if (teamSection) {
          const title = teamSection.querySelector('[data-animate="title"]');
          const desc = teamSection.querySelector('[data-animate="team-desc"]');
          const alumni = teamSection.querySelector(
            '[data-animate="team-alumni"]',
          );
          const faculty = teamSection.querySelector("article");
          const accordion =
            teamSection.querySelector('[role="region"]') ||
            teamSection.querySelector("div:last-child");

          const elements = [title, desc, alumni, faculty, accordion].filter(
            Boolean,
          );

          gsap.set(elements, { opacity: 0, y: 30 });

          ScrollTrigger.create({
            trigger: teamSection,
            start: "top 80%",
            once: true,
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
          gsap.set(cards, { opacity: 0, y: 24 });

          ScrollTrigger.create({
            trigger: contributeSection,
            start: "top 80%",
            once: true,
            onEnter: () => {
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.08,
                ease: "expo.out",
                overwrite: "auto",
              });
            },
          });
        }

        // -------------------------------------------------------------
        // Section: FAQ
        // -------------------------------------------------------------
        const faqSection = document.getElementById("faq");
        if (faqSection) {
          const title = faqSection.querySelector('[data-animate="title"]');
          const items = faqSection.querySelectorAll(
            '[data-animate="faq-item"]',
          );
          const elements = [title, ...Array.from(items)].filter(Boolean);

          gsap.set(elements, { opacity: 0, y: 28 });

          ScrollTrigger.create({
            trigger: faqSection,
            start: "top 80%",
            once: true,
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
          });
        }

        // -------------------------------------------------------------
        // Apple HIG Micro-Interactions: Desktop Hover & Tactile Springs
        // -------------------------------------------------------------
        const isPointerFine = window.matchMedia(
          "(hover: hover) and (pointer: fine)",
        ).matches;

        if (isPointerFine) {
          // 1. Tactile Button Depress (exclude full-width accordion triggers)
          const buttons = document.querySelectorAll<HTMLElement>(
            "button:not([aria-expanded]):not([aria-controls]), .button, a[role='button']",
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
            listen(btn, "pointerdown", onPointerDown);
            listen(btn, "pointerup", onPointerUp);
            listen(btn, "pointerleave", onPointerUp);
          });

          // 2. Member Card 3D Perspective Tilt
          const memberCards = document.querySelectorAll<HTMLElement>(
            '[data-animate="member-card"]',
          );
          memberCards.forEach((card) => {
            let ticking = false;
            let latest: MouseEvent | null = null;
            const onMouseMove = (e: Event) => {
              latest = e as MouseEvent;
              if (ticking) return;
              ticking = true;
              const frame = window.requestAnimationFrame(() => {
                pendingFrames.delete(frame);
                ticking = false;
                const evt = latest;
                latest = null;
                if (!evt) return;
                const rect = card.getBoundingClientRect();
                if (rect.width === 0 || rect.height === 0) return;
                const xRel = (evt.clientX - rect.left) / rect.width - 0.5;
                const yRel = (evt.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                  rotationY: xRel * 5,
                  rotationX: -yRel * 5,
                  transformPerspective: 800,
                  duration: 0.25,
                  ease: "power1.out",
                  overwrite: "auto",
                });
              });
              pendingFrames.add(frame);
            };
            const onMouseLeave = () => {
              latest = null;
              gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.45,
                ease: "power2.out",
                overwrite: "auto",
              });
            };
            listen(card, "mousemove", onMouseMove);
            listen(card, "mouseleave", onMouseLeave);
          });

          // 3. Diagonal Arrow Micro-Glide
          const ctaButtons = document.querySelectorAll<HTMLElement>(
            '[data-animate="contribute-card"] a, [data-animate="contribute-card"] button, #projects a, #projects button',
          );
          ctaButtons.forEach((btn) => {
            const svgs = btn.querySelectorAll("svg");
            const arrow = svgs.length > 1 ? svgs[svgs.length - 1] : svgs[0];
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
            listen(btn, "mouseenter", onEnter);
            listen(btn, "mouseleave", onLeave);
          });
        }
      });
    });

    return () => {
      isDisposed = true;
      teardownListeners?.();
      teardownListeners = null;
      if (ctx) {
        ctx.revert();
      }
    };
  }, [reduceMotion]);
}

export default useGsapAnimations;
