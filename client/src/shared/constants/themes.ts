import { TTheme } from "@/shared/types";

export const THEMES_MAP = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

export const THEMES: TTheme[] = [
  THEMES_MAP.LIGHT,
  THEMES_MAP.DARK,
  THEMES_MAP.SYSTEM,
] as const;

export const DEFAULT_THEME = THEMES_MAP.SYSTEM;
export const THEME_STORAGE_KEY = "marketplace-vite-ui-theme";
