import { SxProps, Theme } from "@mui/material";

export const boxStyle: SxProps<Theme> = {
  display: "flex",
  gap: "0.5rem",
  justifyContent: "center",
} as const;

export const textStyle: SxProps = {
  fontSize: "1.15rem",
} as const;