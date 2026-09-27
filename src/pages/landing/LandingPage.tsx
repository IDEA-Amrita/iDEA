import { type ComponentType } from "react";
import useSectionNavigation from "../../hooks/useSectionNavigation";
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

export default function LandingPage({ onNavigateAlumni }: LandingPageProps = {}) {
  const {
    activeSection,
    navigateTo,
    isPastHero,
    isAtPageBottom,
    isNavbarVisible,
  } = useSectionNavigation();
  const currentPage = sections.findIndex(({ id }) => id === activeSection);
  const sharedProps = { onNavigate: navigateTo, onNavigateAlumni };
  const hasNextSection = isPastHero && currentPage < sections.length - 1;
  const showFloatingButton = hasNextSection || isAtPageBottom;

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
        aria-label={isAtPageBottom ? "Back to top" : "Scroll to next section"}
        aria-hidden={!showFloatingButton}
        tabIndex={showFloatingButton ? 0 : -1}
        onClick={() => {
          if (isAtPageBottom) {
            navigateTo("home");
            return;
          }
          const nextSection = sections[currentPage + 1];
          if (nextSection) navigateTo(nextSection.id);
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
          <polyline
            points={isAtPageBottom ? "6 15 12 9 18 15" : "6 9 12 15 18 9"}
          />
        </svg>
      </IconButton>
    </>
  );
}
