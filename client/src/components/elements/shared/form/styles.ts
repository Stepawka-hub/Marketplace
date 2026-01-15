import { SxProps, Theme } from "@mui/material";

export const formStyle: SxProps<Theme> = {
  py: 4,
  px: 2,
  borderRadius: "1rem",
  backgroundColor: "custom.primary",
  border: 0,
  width: "35rem",
} as const;

export const formTitleStyle: SxProps = {
  mb: 3,
} as const;
