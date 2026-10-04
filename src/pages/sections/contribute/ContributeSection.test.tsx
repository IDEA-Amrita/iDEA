import axe from "axe-core";
import { describe, expect, it } from "vitest";
import { renderWithProviders, screen } from "../../../test/render";

import Contribute from "./ContributeSection";

describe("Contribute", () => {
  it("gives both contribution actions accessible names", async () => {
    const { container } = renderWithProviders(<Contribute />);
    const actions = screen.getAllByRole("button", {
      name: /Propose a project|Become an iDEA member/i,
    });

    expect(actions).toHaveLength(2);
    expect(actions[0]).toHaveAttribute("aria-haspopup", "dialog");
    expect(actions[1]).toHaveAttribute("aria-haspopup", "dialog");

    const results = await axe.run(container);
    const highImpactViolations = results.violations.filter(
      ({ impact }) => impact && ["serious", "critical"].includes(impact),
    );

    expect(highImpactViolations).toEqual([]);
  });
});
