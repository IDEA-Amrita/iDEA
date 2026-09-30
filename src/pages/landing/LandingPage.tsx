import { type ComponentType } from "react";
import useSectionNavigation from "../../hooks/useSectionNavigation";
import { useGsapAnimations } from "../../animations/useGsapAnimations";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ThemeToggle from "../../components/ThemeToggle";
import IconButton from "../../components/IconButton";
import { sections, type SectionId } from "../../config/sections";
import AboutSection from "../sections/about/AboutSection";
import ContributeSection from "../sections/contribute/ContributeSection";
import HomeSection from "../sections/home/HomeSection";
import ProjectsSection from "../sections/projects/ProjectsSection";
import TeamSection from "../sections/team/TeamSection";
import type { SectionNavigationProps } from "../../types/navigation";
import classNames from "../../utils/classNames";
import styles from "./LandingPage.module.css";

const sectionComponents: Record<
  SectionId,
  ComponentType<SectionNavigationProps>
> = {
  home: HomeSection,
  about: AboutSection,
  team: TeamSection,
  projects: ProjectsSection,
  contribute: ContributeSection,
};

interface LandingPageProps {
  onNavigateAlumni?: (() => void) | undefined;
}

export default function LandingPage({
  onNavigateAlumni,
}: LandingPageProps = {}) {
  useGsapAnimations();
  const {
    activeSection,
    navigateTo,
    isPastHero,
    isAtPageBottom,
    isNavbarVisible,
  } = useSectionNavigation();
  const sharedProps = { onNavigate: navigateTo, onNavigateAlumni };
  const showFloatingButton = isAtPageBottom;

  return (
    <>
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Navbar visible={isNavbarVisible} />
      <ThemeToggle visible={isNavbarVisible} isHero={!isPastHero} />
      <main id="main-content" tabIndex={-1}>
        <HomeSection {...sharedProps} />
        <div className={styles.indexedLayout}>
          <div className={styles.railScope}>
            <Sidebar
              visible={isPastHero}
              activeSection={activeSection}
              onNavigate={navigateTo}
            />
          </div>
          <div className={styles.indexedSections}>
            {sections
              .filter(({ id }) => id !== "home")
              .map(({ id }) => {
                const Section = sectionComponents[id];
                return <Section key={id} {...sharedProps} />;
              })}
          </div>
        </div>
      </main>
      <Footer />

      <IconButton
        className={classNames(
          styles.nextSection,
          !showFloatingButton && styles.nextSectionHidden,
        )}
        type="button"
        aria-label="Back to top"
        aria-hidden={!showFloatingButton}
        tabIndex={showFloatingButton ? 0 : -1}
        onClick={() => {
          navigateTo("home");
        }}
      >
        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 15 12 9 18 15" />
        </svg>
      </IconButton>
    </>
  );
}
