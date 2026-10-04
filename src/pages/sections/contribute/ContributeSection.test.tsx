import axe from "axe-core";
import { describe, expect, it } from "vitest";
import { renderWithProviders, screen } from "../../../test/render";
import Contribute from "./ContributeSection";

describe("Contribute", () => {
  it("renders accessible direct action links and passes axe audit", async () => {
    const { container } = renderWithProviders(<Contribute />);

    expect(screen.getByRole("heading", { name: /Get Involved & Contribute/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Check Out Our Socials/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Draft Proposal/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub Org/i })).toBeInTheDocument();

    const results = await axe.run(container);
    const highImpactViolations = results.violations.filter(
      ({ impact }) => impact && ["serious", "critical"].includes(impact),
    );

    expect(highImpactViolations).toEqual([]);
  });
});
