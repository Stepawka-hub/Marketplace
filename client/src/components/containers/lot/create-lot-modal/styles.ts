import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";

export const formStyle: SxProps<Theme> = {
  width: "100%",
  maxWidth: "30rem",
  minWidth: {
    xs: "auto",
    sm: "30rem",
  },
  backgroundColor: "custom.primary.main",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme: Theme) =>
    theme.palette.mode === THEMES_MAP.DARK
      ? "custom.primary.main"
      : theme.palette.divider,
} as const;
