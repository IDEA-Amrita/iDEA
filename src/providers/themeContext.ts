import { createContext, useContext } from "react";

export type ThemePreference = "light" | "dark" | "system";
export interface ThemeState {
  preference: ThemePreference;
  theme: "light" | "dark";
  setPreference: (preference: ThemePreference) => void;
}
export const ThemeContext = createContext<ThemeState | null>(null);

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme requires ThemeProvider");
  return value;
}
