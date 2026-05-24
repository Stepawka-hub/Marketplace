import { THEMES_MAP } from "@/shared/constants";
import { alpha, SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const likeButtonStyles: SxProps<Theme> = {
  backgroundColor: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.DARK ? "#121212" : "transparent",
  backgroundImage: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.DARK
      ? "linear-gradient(rgba(255, 255, 255, 0.051), rgba(255, 255, 255, 0.051))"
      : "none",
  color: red[600],

  "&.Mui-disabled": {
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === "light"
        ? theme.palette.custom.primary.main
        : theme.palette.custom.primary.main,
    color: (theme: Theme) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
    pointerEvents: "none",
  },

  "&:hover": {
    backgroundColor: (theme: Theme) =>
      alpha(theme.palette.custom.primary.main, 0.75),
  },
};
