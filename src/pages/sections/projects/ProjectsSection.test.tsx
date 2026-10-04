import { describe, expect, it } from "vitest";
import { renderWithProviders, screen, within } from "../../../test/render";

import Projects from "./ProjectsSection";

describe("Projects", () => {
  it("updates details and contact actions for the selected project", async () => {
    const { user } = renderWithProviders(<Projects />);

    expect(
      screen.getByText(/Latest project intake · 2026-27/),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/iDEA, CSE/).length).toBeGreaterThan(0);
    const messfit = screen.getByRole("button", { name: "MessFit" });
    expect(messfit).toHaveAttribute("aria-expanded", "true");

    expect(
      screen.getByRole("link", { name: "View MessFit on GitHub" }),
    ).toHaveAttribute("href", "https://github.com/IDEA-Amrita/Mess-Fit");

    const nodeshare = screen.getByRole("button", {
      name: "NodeShare",
    });
    await user.click(nodeshare);

    expect(screen.getAllByText("iDEA, CSE").length).toBeGreaterThan(0);
    expect(nodeshare).toHaveAttribute("aria-expanded", "true");
    expect(messfit).toHaveAttribute("aria-expanded", "false");

    expect(
      screen.getByRole("link", { name: "View NodeShare on GitHub" }),
    ).toHaveAttribute("href", "https://github.com/IDEA-Amrita/NodeShare");

    await user.click(nodeshare);
    expect(nodeshare).toHaveAttribute("aria-expanded", "false");
    const controlsId = nodeshare.getAttribute("aria-controls")!;
    const panel = document.getElementById(controlsId)!;
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel.firstElementChild).toHaveAttribute("inert");

    await user.click(nodeshare);
    expect(nodeshare).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("link", { name: "View NodeShare on GitHub" }),
    ).toHaveAttribute("href", "https://github.com/IDEA-Amrita/NodeShare");
  });
});
