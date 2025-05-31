import { darkPalette, lightPalette } from "./palette";

export const ThemeSettings = (mode: "light" | "dark") => ({
    palette: {
      mode,
      ...(mode === "dark" ? darkPalette : lightPalette),
    },
});
