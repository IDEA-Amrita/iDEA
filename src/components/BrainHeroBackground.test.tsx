import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import BrainHeroBackground from "./BrainHeroBackground";

describe("BrainHeroBackground", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        text: vi.fn().mockResolvedValue('<svg id="brain-svg"><g></g></svg>'),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders SVG fallback in non-WebGL environments", async () => {
    const { container } = render(<BrainHeroBackground />);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });

    const wrapper = container.querySelector('[aria-hidden="true"]');
    expect(wrapper).toBeInTheDocument();
  });

  it("cycles circuit colors on click", async () => {
    const { container } = render(<BrainHeroBackground />);
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });

    const wrapper = container.querySelector(
      '[aria-hidden="true"]',
    ) as HTMLElement;
    expect(wrapper).toBeInTheDocument();

    fireEvent.click(wrapper);
    expect(wrapper.style.getPropertyValue("--bc")).toBe("#8b80ff");

    fireEvent.click(wrapper);
    expect(wrapper.style.getPropertyValue("--bc")).toBe("#059669");
  });

  it("triggers onSync and onComplete callbacks on load", async () => {
    const onSync = vi.fn();
    const onComplete = vi.fn();

    render(<BrainHeroBackground onSync={onSync} onComplete={onComplete} />);

    await act(async () => {
      await new Promise((r) => setTimeout(r, 50));
    });

    expect(onSync).toHaveBeenCalled();
    expect(onComplete).toHaveBeenCalled();
  });
});
