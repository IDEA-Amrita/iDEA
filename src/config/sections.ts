export const sections = Object.freeze([
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "projects", label: "Projects" },
  { id: "contribute", label: "Contribute" },
  { id: "faq", label: "FAQ" },
] as const);

export type SectionId = (typeof sections)[number]["id"];
