import { SxProps } from "@mui/material";
import { green } from "@mui/material/colors";

export const wrapperStyle: SxProps = {
  p: 2,
  backgroundColor: "custom.primary.main",
} as const;

export const contentBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2,
} as const;

export const priceStyle: SxProps = {
  fontSize: {
    xs: "1.5rem",
    sm: "1.75rem",
    md: "2rem",
  },
  color: green[500],
  fontWeight: 600,
};
