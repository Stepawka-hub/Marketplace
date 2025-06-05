import { basePalette, darkPalette, lightPalette } from "./palette";

export const ThemeSettings = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...basePalette,
    ...(mode === "dark" ? darkPalette : lightPalette),
  },
});
