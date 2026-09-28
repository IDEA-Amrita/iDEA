import type { ReactElement, ReactNode } from "react";
import ThemeProvider from "../providers/ThemeProvider";
import { render, type RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

function TestProviders({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: TestProviders, ...options }),
  };
}

export * from "@testing-library/react";
export { renderWithProviders };
