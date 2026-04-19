import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  width: "30rem",
} as const;

export const labelStyle: SxProps = {
  minWidth: 60,
  textWrap: "nowrap",
  textAlign: "left",
} as const;

export const valueStyle: SxProps = {
  width: "100%",
  textAlign: "right",
} as const;
