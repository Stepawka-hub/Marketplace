import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 3,
  width: {
    xs: "100%",
    md: "30rem",
  },
} as const;

export const labelStyle: SxProps = {
  textWrap: "nowrap",
  textAlign: "left",
} as const;

export const valueStyle: SxProps = {
  width: "100%",
  textAlign: "right",
} as const;
