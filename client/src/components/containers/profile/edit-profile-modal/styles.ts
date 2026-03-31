import { SxProps, Theme } from "@mui/material";

export const formStyle: SxProps<Theme> = {
  width: "30rem",
  backgroundColor: "custom.primary.main",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "custom.primary.main"
      : theme.palette.divider,
} as const;
