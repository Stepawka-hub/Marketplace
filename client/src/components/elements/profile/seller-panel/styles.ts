import { SxProps } from "@mui/material";

export const headerStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  mb: 2,
} as const;

export const titleStyle: SxProps = {
  fontSize: {
    xs: "1.15rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
  },
  fontWeight: 500,
} as const;
