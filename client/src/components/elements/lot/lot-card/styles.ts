import { SxProps, Theme } from "@mui/material";

export const footerContainerStyle: SxProps<Theme> = {
  mt: 2,
} as const;

export const priceRowStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  mb: 1,
} as const;

export const statusRowStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
} as const;