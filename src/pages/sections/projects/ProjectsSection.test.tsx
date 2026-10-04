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

    await user.click(
      screen.getByRole("button", { name: "Show project contact options" }),
    );
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeInTheDocument();

    const nodeshare = screen.getByRole("button", {
      name: "NodeShare",
    });
    await user.click(nodeshare);

    expect(screen.getAllByText("iDEA, CSE").length).toBeGreaterThan(0);
    expect(nodeshare).toHaveAttribute("aria-expanded", "true");
    expect(messfit).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeNull();

    await user.click(
      screen.getByRole("button", { name: "Show project contact options" }),
    );

    const contactGroup = screen.getByRole("group", {
      name: "Project contact options",
    });
    const contactActions = within(contactGroup);

    expect(
      contactActions.getByRole("link", { name: "Email iDEA" }),
    ).toHaveAttribute("href", "mailto:ideatech@cb.amrita.edu");
    expect(
      contactActions.getByRole("link", { name: "iDEA on Instagram" }),
    ).toHaveAttribute("href", "https://www.instagram.com/idea_amrita/");
    await user.click(nodeshare);
    expect(nodeshare).toHaveAttribute("aria-expanded", "false");
    const controlsId = nodeshare.getAttribute("aria-controls")!;
    const panel = document.getElementById(controlsId)!;
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel.firstElementChild).toHaveAttribute("inert");
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeNull();
    await user.click(nodeshare);
    expect(nodeshare).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeNull();
  });
});
