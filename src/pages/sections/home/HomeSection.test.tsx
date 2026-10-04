import { describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, act } from "../../../test/render";
import HomeSection from "./HomeSection";

describe("HomeSection", () => {
  it("renders hero wordmark and navigation buttons", () => {
    renderWithProviders(<HomeSection onNavigate={vi.fn()} />);
    expect(screen.getByRole("heading", { name: "iDEA" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Contribute" }),
    ).toBeInTheDocument();
  });

  it("records session storage flag when completed", async () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    renderWithProviders(<HomeSection onNavigate={vi.fn()} />);

    // In test mode, done() is triggered by BrainHeroBackground
    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });

    expect(setItemSpy).toHaveBeenCalledWith("idea-intro-seen", "1");
    setItemSpy.mockRestore();
  });

  it("skips intro when session storage indicates it was already seen", () => {
    window.sessionStorage.setItem("idea-intro-seen", "1");
    renderWithProviders(<HomeSection onNavigate={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "iDEA" })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Scroll to About" }),
    ).not.toHaveClass(/scrollCueHidden/);
  });
});
