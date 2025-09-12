import { SxProps } from "@mui/material";

export const wrapperStyle: SxProps = {
  p: 2,
  backgroundColor: "custom.primary",
} as const;

export const contentBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2,
} as const;

export const priceStyle: SxProps = {
  fontSize: "2rem",
  fontWeight: 600,
};
