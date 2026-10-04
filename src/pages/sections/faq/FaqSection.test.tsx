import axe from "axe-core";
import { describe, expect, it } from "vitest";
import { renderWithProviders, screen } from "../../../test/render";
import FaqSection from "./FaqSection";

describe("FaqSection", () => {
  it("renders FAQ accordion, allows expanding items, and passes accessibility checks", async () => {
    const { user, container } = renderWithProviders(<FaqSection />);

    expect(
      screen.getByRole("heading", { name: /Frequently Asked Questions/i }),
    ).toBeInTheDocument();

    const whatIsIdeaButton = screen.getByRole("button", {
      name: /What is iDEA Club\?/i,
    });
    expect(whatIsIdeaButton).toHaveAttribute("aria-expanded", "true");

    const whatWeDoButton = screen.getByRole("button", {
      name: /What does iDEA Club actually do\?/i,
    });
    expect(whatWeDoButton).toHaveAttribute("aria-expanded", "false");

    await user.click(whatWeDoButton);
    expect(whatWeDoButton).toHaveAttribute("aria-expanded", "true");

    const results = await axe.run(container);
    const highImpactViolations = results.violations.filter(
      ({ impact }) => impact && ["serious", "critical"].includes(impact),
    );

    expect(highImpactViolations).toEqual([]);
  });
});
