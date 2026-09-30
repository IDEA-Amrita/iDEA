import { afterEach, describe, expect, it, vi } from "vitest";
import { renderWithProviders, screen, act } from "../test/render";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "./themeContext";

function PreferenceControl() {
  const { preference, theme, setPreference } = useTheme();
  return (
    <>
      <p>
        {preference}: {theme}
      </p>
      <button onClick={() => setPreference("system")}>Use system theme</button>
      <button onClick={() => setPreference("dark")}>Use dark theme</button>
    </>
  );
}
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("theme preferences", () => {
  it("toggles between light and dark and keeps browser chrome in sync", async () => {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.append(meta);
    const { user } = renderWithProviders(<ThemeToggle />);
    await user.click(screen.getByRole("button", { name: "Use dark theme" }));
    expect(meta.content).toBe("#181816");
    await user.click(screen.getByRole("button", { name: "Use light theme" }));
    expect(meta.content).toBe("#f5f4f0");
    expect(localStorage.getItem("idea-theme")).toBe("light");
    meta.remove();
  });

  it("follows live system changes only when Auto is selected", async () => {
    let change: (() => void) | undefined;
    const media = {
      matches: false,
      addEventListener: (_event: string, callback: () => void) => {
        change = callback;
      },
      removeEventListener: vi.fn(),
    };
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => media),
    );
    const { user } = renderWithProviders(<ThemeToggle />);
    media.matches = true;
    act(() => {
      change?.();
    });
    expect(document.documentElement.dataset.theme).toBe("dark");
    await user.click(screen.getByRole("button", { name: "Use light theme" }));
    media.matches = false;
    act(() => {
      change?.();
    });
    media.matches = true;
    act(() => {
      change?.();
    });
    expect(document.documentElement.dataset.theme).toBe("light");
  });
  it("can restore system behavior after an explicit preference", async () => {
    localStorage.setItem("idea-theme", "dark");
    const { user } = renderWithProviders(<PreferenceControl />);
    expect(screen.getByText("dark: dark")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Use system theme" }));
    expect(screen.getByText("system: light")).toBeInTheDocument();
    expect(localStorage.getItem("idea-theme")).toBe("system");
  });

  it("works when browser storage is blocked", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    const { user } = renderWithProviders(<PreferenceControl />);
    await user.click(screen.getByRole("button", { name: "Use dark theme" }));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
