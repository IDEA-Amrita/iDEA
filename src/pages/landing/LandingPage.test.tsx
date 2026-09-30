// @ts-nocheck
import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, within, act } from "../../test/render";

import LandingPage from "./LandingPage";

const destinations = ["home", "about", "team", "projects", "contribute"];
describe("landing page", () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView.mockClear();
    vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(
      function () {
        const top = Math.max(0, destinations.indexOf(this.id)) * 1000;
        return { top, bottom: top + 1000 };
      },
    );
  });

  it("renders document sections and the intended GitHub URL", () => {
    const { container } = renderWithProviders(<LandingPage />);
    expect(screen.getByRole("heading", { name: "iDEA" })).toBeVisible();
    for (const id of destinations)
      expect(container.querySelector(`section#${id}`)).toBeInTheDocument();
    expect(
      within(
        screen.getByRole("navigation", { name: "Primary navigation" }),
      ).getByRole("link", { name: "GitHub" }),
    ).toHaveAttribute("href", "https://github.com/IDEA-Amrita");
  });

  it("scrolls from the hero cue to the About section", async () => {
    const { user } = renderWithProviders(<LandingPage />);
    const cue = screen.getByRole("link", { name: "Scroll to About" });
    expect(cue).toHaveAttribute("href", "#about");
    await user.click(cue);
    expect(Element.prototype.scrollIntoView.mock.instances.at(-1).id).toBe(
      "about",
    );
    expect(Element.prototype.scrollIntoView).toHaveBeenLastCalledWith({
      block: "start",
      behavior: "smooth",
    });
  });

  it("mounts one navbar and scopes one sidebar to the indexed content", () => {
    const { container } = renderWithProviders(<LandingPage />);
    const main = screen.getByRole("main");
    const navbar = container.querySelector("header[data-navbar]");
    const sidebar = container.querySelector(
      'nav[aria-label="Section navigation"]',
    );
    expect(container.querySelectorAll("header[data-navbar]")).toHaveLength(1);
    expect(main).not.toContainElement(navbar);
    expect(main).toContainElement(sidebar);
    expect(navbar.parentElement).toBe(main.parentElement);
    const scope = sidebar.parentElement;
    expect(scope.parentElement.parentElement).toBe(main);
    expect(
      scope.nextElementSibling.querySelectorAll("section[id]"),
    ).toHaveLength(4);
    expect(main).not.toContainElement(screen.getByRole("contentinfo"));
    for (const id of destinations) {
      expect(document.getElementById(id)).not.toContainElement(sidebar);
    }
  });

  it("updates the global sidebar when the section observer reports scrolling", () => {
    const previousObserver = globalThis.IntersectionObserver;
    const observers = [];
    class Observer {
      constructor(callback) {
        this.callback = callback;
        this.elements = [];
        observers.push(this);
      }
      observe(element) {
        this.elements.push(element);
      }
      disconnect() {}
      unobserve() {}
    }
    vi.stubGlobal("IntersectionObserver", Observer);
    let current = 0;
    Element.prototype.getBoundingClientRect.mockImplementation(function () {
      const top = (Math.max(0, destinations.indexOf(this.id)) - current) * 1000;
      return { top, bottom: top + 1000 };
    });
    try {
      const { unmount, container } = renderWithProviders(<LandingPage />);
      const sidebar = container.querySelector(
        'nav[aria-label="Section navigation"]',
      );
      expect(within(sidebar).getByText("1 of 5")).toBeInTheDocument();
      const observer = observers.find(
        ({ elements }) => elements.length === destinations.length,
      );
      current = 3;
      act(() =>
        observer.callback([
          { target: document.getElementById("projects"), isIntersecting: true },
        ]),
      );
      expect(within(sidebar).getByText("4 of 5")).toBeInTheDocument();
      expect(sidebar.querySelector('a[href="#projects"]')).toHaveAttribute(
        "aria-current",
        "location",
      );
      unmount();
    } finally {
      vi.stubGlobal("IntersectionObserver", previousObserver);
    }
  });

  it("shares live hero visibility and removes hidden chrome from accessibility navigation", () => {
    const previousObserver = globalThis.IntersectionObserver;
    const observers = [];
    class Observer {
      constructor(callback) {
        this.callback = callback;
        this.elements = [];
        observers.push(this);
      }
      observe(element) {
        this.elements.push(element);
      }
      disconnect() {}
      unobserve() {}
    }
    vi.stubGlobal("IntersectionObserver", Observer);
    let current = 0;
    Element.prototype.getBoundingClientRect.mockImplementation(function () {
      const top = (Math.max(0, destinations.indexOf(this.id)) - current) * 1000;
      return { top, bottom: top + 1000 };
    });
    try {
      const { container, unmount } = renderWithProviders(<LandingPage />);
      const navbar = container.querySelector("[data-navbar]");
      const sidebar = container.querySelector(
        'nav[aria-label="Section navigation"]',
      );
      const observer = observers.find(
        ({ elements }) => elements.length === 1 && elements[0].id === "home",
      );
      const check = (visible) => {
        for (const element of [navbar, sidebar]) {
          expect(element).toHaveAttribute("aria-hidden", String(!visible));
          expect(element).toHaveAttribute("data-visible", String(visible));
          if (visible) expect(element).not.toHaveAttribute("inert");
          else expect(element).toHaveAttribute("inert");
        }
      };
      check(false);
      expect(
        screen.getByRole("button", { name: "Use dark theme" }),
      ).toBeInTheDocument();
      expect(
        within(navbar).queryByRole("button", { name: "Use dark theme" }),
      ).not.toBeInTheDocument();
      current = 1;
      act(() => observer.callback([]));
      check(true);
      expect(
        screen.getByRole("button", { name: "Use dark theme" }),
      ).toBeInTheDocument();
      current = 0;
      act(() => observer.callback([]));
      check(false);
      expect(container.querySelector("[data-navbar]")).toBe(navbar);
      expect(
        container.querySelector('nav[aria-label="Section navigation"]'),
      ).toBe(sidebar);
      unmount();
    } finally {
      vi.stubGlobal("IntersectionObserver", previousObserver);
    }
  });

  it.each([
    ["About", "about"],
    ["Team", "team"],
    ["Projects", "projects"],
    ["Contribute", "contribute"],
  ])("scrolls %s to its document section", async (name, id) => {
    const { user } = renderWithProviders(<LandingPage />);
    await user.click(
      within(
        screen.getByRole("navigation", { name: "Primary navigation" }),
      ).getByRole("link", { name }),
    );
    expect(Element.prototype.scrollIntoView).toHaveBeenLastCalledWith({
      block: "start",
      behavior: "smooth",
    });
    expect(Element.prototype.scrollIntoView.mock.instances.at(-1).id).toBe(id);
  });

  it("persists the accessible theme selection on the document root", async () => {
    Element.prototype.getBoundingClientRect.mockImplementation(function () {
      const top = (Math.max(0, destinations.indexOf(this.id)) - 2) * 1000;
      return { top, bottom: top + 1000 };
    });
    const { user, unmount } = renderWithProviders(<LandingPage />);
    const toggle = screen.getByRole("button", { name: "Use dark theme" });
    expect(document.getElementById("home")).not.toContainElement(toggle);
    await user.click(toggle);
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(localStorage.getItem("idea-theme")).toBe("dark");
    unmount();
    renderWithProviders(<LandingPage />);
    expect(
      screen.getByRole("button", { name: "Use light theme" }),
    ).toBeInTheDocument();
  });

  it("hides the navbar on downward scroll and reveals it upward while keeping the rail", () => {
    let frame;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation((callback) => {
      frame = callback;
      return 1;
    });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
    let y = 1200;
    vi.spyOn(window, "scrollY", "get").mockImplementation(() => y);
    Element.prototype.getBoundingClientRect.mockImplementation(function () {
      const top = Math.max(0, destinations.indexOf(this.id)) * 1000 - y;
      return { top, bottom: top + 1000 };
    });
    const { container } = renderWithProviders(<LandingPage />);
    const navbar = container.querySelector("[data-navbar]");
    const rail = container.querySelector(
      'nav[aria-label="Section navigation"]',
    );
    expect(navbar).toHaveAttribute("data-visible", "true");
    const scroll = (next) => {
      y = next;
      act(() => {
        window.dispatchEvent(new Event("scroll"));
        frame();
      });
    };
    scroll(1400);
    expect(navbar).toHaveAttribute("inert");
    expect(rail).toHaveAttribute("data-visible", "true");
    scroll(1300);
    expect(navbar).not.toHaveAttribute("inert");
    scroll(0);
    expect(navbar).toHaveAttribute("data-visible", "false");
    expect(rail).toHaveAttribute("data-visible", "false");
  });

  it("shows a back-to-top arrow at the page bottom and scrolls smoothly home", async () => {
    vi.spyOn(window, "scrollY", "get").mockReturnValue(4200);
    vi.spyOn(window, "innerHeight", "get").mockReturnValue(800);
    vi.spyOn(document.documentElement, "scrollHeight", "get").mockReturnValue(
      5000,
    );
    const { user } = renderWithProviders(<LandingPage />);
    await user.click(screen.getByRole("button", { name: "Back to top" }));
    expect(Element.prototype.scrollIntoView.mock.instances.at(-1).id).toBe(
      "home",
    );
    expect(Element.prototype.scrollIntoView).toHaveBeenLastCalledWith({
      block: "start",
      behavior: "smooth",
    });
  });

  it("restores a bookmarked fragment with immediate scrolling", () => {
    window.history.replaceState(null, "", "#projects");
    renderWithProviders(<LandingPage />);
    expect(Element.prototype.scrollIntoView.mock.instances[0].id).toBe(
      "projects",
    );
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith({
      block: "start",
      behavior: "instant",
    });
    expect(window.location.hash).toBe("#projects");
  });
});
