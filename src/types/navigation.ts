import type { SectionId } from "../config/sections";

export interface SectionNavigationProps {
  onNavigate: (section: SectionId) => void;
  onNavigateAlumni?: (() => void) | undefined;
}
