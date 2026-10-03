import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, within } from "../../../test/render";
import Team from "./TeamSection";
import faculty from "../../../data/faculty";
import { teamGroups } from "../../../data/team";

describe("Team", () => {
  it("renders the roster and opens and closes role panels", async () => {
    const { user, container } = renderWithProviders(
      <Team onNavigate={() => {}} />,
    );
    expect(faculty).toHaveLength(1);
    expect(
      teamGroups.map((group) => [group.label, group.members.length]),
    ).toEqual([
      ["PRESIDENT", 1],
      ["VICE PRESIDENTS", 2],
      ["TECH LEAD, R&D HEAD & WEBMASTERS", 4],
      ["SECRETARY, JOINT SECRETARY, TREASURER & MULTIMEDIA HEAD", 4],
    ]);
    expect(container.querySelector("img")).toHaveAttribute(
      "src",
      "/faculty/vedaj_sir.jpg",
    );
    const vicePresidents = screen.getByRole("button", {
      name: "VICE PRESIDENTS",
    });
    expect(vicePresidents).toHaveAttribute("aria-expanded", "false");
    await user.click(vicePresidents);
    const controlsId = vicePresidents.getAttribute("aria-controls")!;
    const panel = document.getElementById(controlsId)!;
    expect(vicePresidents).toHaveAttribute("aria-expanded", "true");
    expect(panel.firstElementChild).not.toHaveAttribute("inert");
    expect(within(panel).queryByText("To be announced")).toBeNull();
    expect(within(panel).getByText("Mahakishore M")).toBeInTheDocument();
    expect(within(panel).getByText("Minoti K")).toBeInTheDocument();
    await user.click(vicePresidents);
    expect(vicePresidents).toHaveAttribute("aria-expanded", "false");
    expect(panel).toHaveAttribute("aria-hidden", "true");
    expect(panel.firstElementChild).toHaveAttribute("inert");

    const alumniLink = screen.getByRole("link", { name: "View Alumni" });
    expect(alumniLink).toHaveAttribute("href", "/alumni");
  });

  it("calls onNavigateAlumni when Alumni button is clicked", async () => {
    const handleNavigateAlumni = vi.fn();
    const { user } = renderWithProviders(
      <Team onNavigate={() => {}} onNavigateAlumni={handleNavigateAlumni} />,
    );
    const alumniLink = screen.getByRole("link", { name: "View Alumni" });
    await user.click(alumniLink);
    expect(handleNavigateAlumni).toHaveBeenCalledTimes(1);
  });
});
