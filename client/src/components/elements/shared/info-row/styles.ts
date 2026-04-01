import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  maxWidth: "19.5rem",
} as const;

export const labelStyle: SxProps = {
  minWidth: 60,
  textAlign: "left",
} as const;

export const valueStyle: SxProps = {
  width: "100%",
  textAlign: "right",
} as const;
