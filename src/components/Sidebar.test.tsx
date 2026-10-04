import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, within } from "../test/render";
import Sidebar from "./Sidebar";

describe("Section navigation", () => {
  it("names all five destinations, reports progress, and supports keyboard navigation", async () => {
    const onNavigate = vi.fn();
    const { user } = renderWithProviders(
      <Sidebar activeSection="team" onNavigate={onNavigate} />,
    );
    const nav = screen.getByRole("navigation", { name: "Section navigation" });
    expect(
      within(nav)
        .getAllByRole("link")
        .map((link) => link.textContent),
    ).toEqual(["Home", "About", "Team", "Projects", "Contribute"]);
    expect(within(nav).getByText("3 of 5")).toBeInTheDocument();
    const team = within(nav).getByRole("link", { name: "Team" });
    expect(team).toHaveAttribute("aria-current", "location");
    team.focus();
    await user.keyboard("{Enter}");
    expect(onNavigate).toHaveBeenLastCalledWith("team");
    await user.click(within(nav).getByRole("link", { name: "Projects" }));
    expect(onNavigate).toHaveBeenLastCalledWith("projects");
  });
});
