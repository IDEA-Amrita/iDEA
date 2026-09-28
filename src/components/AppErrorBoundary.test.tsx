import type { ReactElement } from "react";
import { expect, it, vi } from "vitest";
import { renderWithProviders, screen } from "../test/render";
import AppErrorBoundary from "./AppErrorBoundary";

it("provides recovery links after an unexpected render failure", () => {
  const error = vi.spyOn(console, "error").mockImplementation(() => {});
  function Broken(): ReactElement | null {
    throw new Error("unexpected");
  }
  renderWithProviders(
    <AppErrorBoundary>
      <Broken />
    </AppErrorBoundary>,
  );
  expect(
    screen.getByRole("heading", { name: "Something went wrong" }),
  ).toBeVisible();
  expect(screen.getByRole("link", { name: "Reload iDEA" })).toHaveAttribute(
    "href",
    import.meta.env.BASE_URL,
  );
  error.mockRestore();
});
