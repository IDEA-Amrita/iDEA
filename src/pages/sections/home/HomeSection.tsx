import { useCallback, useEffect, useState } from "react";
import BrainHeroBackground from "../../../components/BrainHeroBackground";
import HeroNavigation from "../../../components/HeroNavigation";
import { PageShell, SectionShell } from "../../../components/Layout";
import type { SectionNavigationProps } from "../../../types/navigation";
import isModifiedClick from "../../../utils/isModifiedClick";
import classNames from "../../../utils/classNames";
import styles from "./HomeSection.module.css";

const INTRO_STORAGE_KEY = "idea-intro-seen";

function shouldPlayIntro(): boolean {
  try {
    return (
      import.meta.env.MODE !== "test" &&
      !sessionStorage.getItem(INTRO_STORAGE_KEY)
    );
  } catch {
    return false;
  }
}

export default function HomeSection({ onNavigate }: SectionNavigationProps) {
  const [firstVisit] = useState(shouldPlayIntro);
  const [stage, setStage] = useState<"blank" | "wordmark" | "all">(
    firstVisit ? "blank" : "all",
  );

  const done = useCallback(() => {
    setStage("all");
    try {
      sessionStorage.setItem(INTRO_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (stage === "all") return;
    const safety = setTimeout(done, 3600);
    return () => {
      clearTimeout(safety);
    };
  }, [stage, done]);

  return (
    <PageShell id="home" aria-labelledby="hero-title" className={styles.page}>
      <SectionShell aria-labelledby="hero-title">
        <BrainHeroBackground
          isIntro={firstVisit}
          onSync={done}
          onComplete={done}
        />
        <HeroNavigation
          onNavigate={onNavigate}
          stage={stage}
          skipIntro={!firstVisit}
        />
        <a
          className={classNames(
            styles.scrollCue,
            stage !== "all" && styles.scrollCueHidden,
          )}
          href="#about"
          aria-label="Scroll to About"
          onClick={(event) => {
            if (isModifiedClick(event)) return;
            event.preventDefault();
            onNavigate("about");
          }}
        >
          <span>scroll</span>
          <span className={styles.arrowCircle} aria-hidden="true">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </span>
        </a>
      </SectionShell>
    </PageShell>
  );
}
