import { SxProps } from "@mui/material";

export const productNameStyle: SxProps = {
  mb: 2,
  fontSize: "2rem",
  fontWeight: 600,
} as const;

export const productContentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
} as const;

export const dividerStyle: SxProps = {
  my: 3,
} as const;
