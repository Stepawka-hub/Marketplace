import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";

export const buttonStyle: SxProps<Theme> = {
  width: "2.75rem",
  height: "2.75rem",
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.DARK ? "#121212" : "transparent",
  backgroundImage: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.DARK
      ? "linear-gradient(rgba(255, 255, 255, 0.051), rgba(255, 255, 255, 0.051))"
      : "none",
} as const;
