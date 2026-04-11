import { THEMES_MAP } from "@/shared/constants";
import { alpha, SxProps, Theme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const createLotButtonStyles: SxProps<Theme> = {
  backgroundColor: (theme: Theme) => theme.palette.custom.primary.main,
  color: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.LIGHT ? yellow[900] : yellow[700],

  "&.Mui-disabled": {
    backgroundColor: (theme: Theme) =>
      theme.palette.mode === THEMES_MAP.LIGHT
        ? theme.palette.custom.primary.main
        : theme.palette.custom.primary.main,
    color: (theme: Theme) =>
      theme.palette.mode === THEMES_MAP.LIGHT
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
    pointerEvents: "none",
  },

  "&:hover": {
    backgroundColor: (theme: Theme) =>
      alpha(theme.palette.custom.primary.main, 0.85),
  },
};
