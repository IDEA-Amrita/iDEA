import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen } from "../../test/render";
import AlumniPage from "./AlumniPage";
import { alumniData } from "../../data/alumni";

describe("AlumniPage", () => {
  it("renders alumni heading, batch pills, and members grid with contact links", () => {
    renderWithProviders(<AlumniPage onBack={() => {}} />);
    expect(screen.getByRole("heading", { name: "Alumni" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "2025-26" })).toBeInTheDocument();

    const batch25 = alumniData["2025-26"]!;
    expect(batch25).toHaveLength(9);

    for (const member of batch25) {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getAllByText(member.role).length).toBeGreaterThan(0);
    }

    const linkedInLinks = screen.getAllByLabelText(/LinkedIn/i);
    expect(linkedInLinks.length).toBeGreaterThan(0);
    const githubLinks = screen.getAllByLabelText(/GitHub/i);
    expect(githubLinks.length).toBeGreaterThan(0);
  });

  it("calls onBack when Back to Core Team button is clicked", async () => {
    const handleBack = vi.fn();
    const { user } = renderWithProviders(<AlumniPage onBack={handleBack} />);

    const backButton = screen.getByRole("button", {
      name: "Back to Core Team",
    });
    await user.click(backButton);
    expect(handleBack).toHaveBeenCalledTimes(1);
  });
});
