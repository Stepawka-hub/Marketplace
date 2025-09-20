import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./theme-context";
import { Theme, ThemeProviderProps } from "./types";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeSettings } from "@/config/mui";
import { THEME_STORAGE_KEY, THEMES_MAP } from "@/shared/constants";

export const ThemeProvider = ({
  children,
  defaultTheme = THEMES_MAP.SYSTEM,
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Проверка системной темы
  const resolvedTheme =
    theme === THEMES_MAP.SYSTEM
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? THEMES_MAP.DARK
        : THEMES_MAP.LIGHT
      : theme;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(THEMES_MAP.LIGHT, THEMES_MAP.DARK);
    root.classList.add(theme);
  }, [theme]);

  const muiTheme = useMemo(
    () => createTheme(ThemeSettings(resolvedTheme)),
    [resolvedTheme]
  );

  const contextValue = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
