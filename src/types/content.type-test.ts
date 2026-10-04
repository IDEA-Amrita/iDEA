import type { SectionId } from "../config/sections";
import type { Project } from "./content";

// @ts-expect-error: Removed section IDs must be rejected by the compiler.
export const removedSection: SectionId = "blogs";

// @ts-expect-error: Projects require the complete normalized record shape.
export const malformedProject: Project = { id: "missing-required-fields" };
