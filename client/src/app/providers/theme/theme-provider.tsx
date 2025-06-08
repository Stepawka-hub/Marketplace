import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./context/theme-context";
import { Theme, ThemeProviderProps } from "./types";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeSettings } from "@shared/config/mui/theme";

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  // Проверка системной темы
  const resolvedTheme = theme === "system"
    ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    : theme;

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
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
