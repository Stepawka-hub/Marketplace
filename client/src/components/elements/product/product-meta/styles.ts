import { SxProps, Theme } from "@mui/material";

export const wrapperStyle: SxProps<Theme> = {
  p: 2,
  backgroundColor: "custom.primary.main",
} as const;

export const mainContainerStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
} as const;

export const titleStyle: SxProps = {
  fontSize: "1.25rem",
  fontWeight: "600",
  mb: 1.5,
} as const;