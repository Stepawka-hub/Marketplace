import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  p: 2,
  borderRadius: 3,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "custom.primary",
} as const;

export const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "600",
  textAlign: "center",
} as const;

export const priceBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
} as const;

export const textStyle = {
  fontSize: "1.1rem",
} as const;

export const checkoutBtnStyle: SxProps = {
  textTransform: "none",
  fontSize: "1.15rem",
  fontWeight: 500,
} as const;
