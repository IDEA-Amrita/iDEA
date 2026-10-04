import { describe, expect, it } from "vitest";
import { sections } from "./sections";

describe("section registry", () => {
  it("defines the active landing sections once in display order", () => {
    expect(sections).toEqual([
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "team", label: "Team" },
      { id: "projects", label: "Projects" },
      { id: "contribute", label: "Contribute" },
    ]);
    expect(new Set(sections.map(({ id }) => id)).size).toBe(sections.length);
  });
});
