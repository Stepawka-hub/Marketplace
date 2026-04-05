import { SxProps, Theme } from "@mui/material";

export const formStyle: SxProps<Theme> = {
  py: 3.5,
  px: 2,
  width: "33.5rem",
  borderRadius: "1rem",
  backgroundColor: "custom.primary.main",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme: Theme) =>
    theme.palette.mode === "dark" ? "custom.primary.main" : theme.palette.divider,
} as const;

export const formTitleStyle: SxProps = {
  mb: 3,
} as const;
