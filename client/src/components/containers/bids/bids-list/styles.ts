import { SxProps } from "@mui/material";

export const gridStyle: SxProps = {
  display: "grid",
  gap: 2,
  mt: 2,
  mb: 4,
} as const;

export const titleStyle: SxProps = {
  mb: {
    xs: 1,
    sm: 2,
  },
  fontSize: {
    xs: "1.5rem",
    sm: "1.75rem",
    md: "2rem",
  },
  fontWeight: 600,
} as const;
