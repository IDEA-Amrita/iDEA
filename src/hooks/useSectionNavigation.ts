import { useCallback, useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { sections, type SectionId } from "../config/sections";

function hashSection(): SectionId | undefined {
  return sections.find(({ id }) => `#${id}` === window.location.hash)?.id;
}

export default function useSectionNavigation() {
  const lenis = useLenis();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isAtPageBottom, setIsAtPageBottom] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const navigateTo = useCallback(
    (id: SectionId, immediate = false) => {
      if (!immediate) {
        const heading = document
          .getElementById(id)
          ?.querySelector<HTMLElement>("h1, h2");
        if (heading) {
          heading.tabIndex = -1;
          heading.focus({ preventScroll: true });
        }
      }
      const target = document.getElementById(id);
      if (!target) return;
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (lenis) {
        lenis.scrollTo(target, { immediate: immediate || reduceMotion });
      } else {
        target.scrollIntoView({
          block: "start",
          behavior: immediate || reduceMotion ? "instant" : "smooth",
        });
      }
    },
    [lenis],
  );

  useEffect(() => {
    let restoringHash = false;
    let restoreFrame = 0;
    let cachedReadingLine = Math.max(window.innerHeight / 3, 50);
    let lastActiveSection: SectionId = "home";
    let sectionElements = sections.map(({ id }) => ({
      id,
      el: document.getElementById(id),
    }));

    const updateChromeMetrics = () => {
      const navbar = document.querySelector<HTMLElement>("[data-navbar]");
      const rail = document.querySelector<HTMLElement>(
        'nav[aria-label="Section navigation"]',
      );
      const isMobile = window.innerWidth <= 640;
      const mobileRailHeight = isMobile && rail ? rail.offsetHeight : 0;
      const chromeHeight = (navbar?.offsetHeight ?? 0) + mobileRailHeight;
      cachedReadingLine = Math.max(window.innerHeight / 3, chromeHeight + 1);
      sectionElements = sections.map(({ id }) => ({
        id,
        el: document.getElementById(id),
      }));
    };

    const update = () => {
      if (restoringHash) return;
      let current: SectionId = "home";
      for (const { id, el } of sectionElements) {
        if (el && el.getBoundingClientRect().top <= cachedReadingLine) {
          current = id;
        }
      }
      if (current !== lastActiveSection) {
        lastActiveSection = current;
        setActiveSection(current);
        if (window.location.hash !== `#${current}`) {
          window.history.replaceState(window.history.state, "", `#${current}`);
        }
      }
    };
    const restoreHash = () => {
      const id = hashSection();
      if (!id) return false;
      restoringHash = true;
      lastActiveSection = id;
      setActiveSection(id);
      navigateTo(id, true);
      window.cancelAnimationFrame(restoreFrame);
      restoreFrame = window.requestAnimationFrame(() => {
        restoringHash = false;
        update();
      });
      return true;
    };
    updateChromeMetrics();
    if (!restoreHash()) update();
    let observer: IntersectionObserver | undefined;
    const observeSections = () => {
      observer?.disconnect();
      if (typeof IntersectionObserver === "undefined") return;
      updateChromeMetrics();
      const topInset = Math.max(
        0,
        Math.floor(cachedReadingLine - window.innerHeight / 3),
      );
      const bottomInset = Math.max(
        0,
        Math.floor(window.innerHeight - cachedReadingLine),
      );
      observer = new IntersectionObserver(update, {
        rootMargin: `-${String(topInset)}px 0px -${String(bottomInset)}px 0px`,
        threshold: 0,
      });
      for (const { el } of sectionElements) {
        if (el) observer.observe(el);
      }
    };
    const hero = document.getElementById("home");
    const updateHeroVisibility = () => {
      if (hero) setIsPastHero(hero.getBoundingClientRect().bottom <= 0);
    };
    const updatePageBottom = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      setIsAtPageBottom(
        window.scrollY > 0 &&
          window.scrollY + window.innerHeight >= scrollHeight - 2,
      );
    };
    const heroObserver =
      hero && typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(updateHeroVisibility, { threshold: 0 })
        : undefined;
    if (hero) heroObserver?.observe(hero);
    if (!heroObserver) updateHeroVisibility();
    updatePageBottom();
    observeSections();
    const onResize = () => {
      updateChromeMetrics();
      observeSections();
      update();
      updateHeroVisibility();
      updatePageBottom();
    };
    let frame = 0;
    let directionOrigin = window.scrollY;
    const onScroll = () => {
      if (!frame)
        frame = window.requestAnimationFrame(() => {
          frame = 0;
          const distance = window.scrollY - directionOrigin;
          if (Math.abs(distance) >= 8) {
            setIsScrollingDown(distance > 0);
            directionOrigin = window.scrollY;
          }
          update();
          updateHeroVisibility();
          updatePageBottom();
        });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", restoreHash);
    return () => {
      observer?.disconnect();
      heroObserver?.disconnect();
      window.cancelAnimationFrame(restoreFrame);
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", restoreHash);
    };
  }, [navigateTo]);
  return {
    activeSection,
    navigateTo,
    isPastHero,
    isAtPageBottom,
    isNavbarVisible: isPastHero && !isScrollingDown,
  };
}
