import { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  mt: 2,
} as const;

export const captionStyle: SxProps<Theme> = {
  ml: 1,
  color: "text.secondary",
} as const;

export const stackStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 1,
  overflowX: "auto",
} as const;
