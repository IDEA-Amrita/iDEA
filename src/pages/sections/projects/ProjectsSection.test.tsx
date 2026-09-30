import { describe, expect, it } from "vitest";
import { renderWithProviders, screen, within } from "../../../test/render";

import Projects from "./ProjectsSection";

describe("Projects", () => {
  it("updates details and contact actions for the selected project", async () => {
    const { user } = renderWithProviders(<Projects />);

    expect(screen.getByText(/Nirmal K, 4th Year CSE/)).toBeInTheDocument();
    const scheduler = screen.getByRole("button", { name: "Scheduler" });
    expect(scheduler).toHaveAttribute("aria-expanded", "true");

    await user.click(
      screen.getByRole("button", { name: "Show project contact options" }),
    );
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeInTheDocument();

    const allocation = screen.getByRole("button", {
      name: "Project Allocation System",
    });
    await user.click(allocation);

    expect(screen.getByText("iDEA, CSE")).toBeInTheDocument();
    expect(allocation).toHaveAttribute("aria-expanded", "true");
    expect(scheduler).toHaveAttribute("aria-expanded", "false");
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
    await user.click(allocation);
    expect(allocation).toHaveAttribute("aria-expanded", "false");
    const controlsId = allocation.getAttribute("aria-controls")!;
    const panel = document.getElementById(controlsId)!;
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel.firstElementChild).toHaveAttribute("inert");
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeNull();
    await user.click(allocation);
    expect(allocation).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.queryByRole("group", { name: "Project contact options" }),
    ).toBeNull();
  });
});
