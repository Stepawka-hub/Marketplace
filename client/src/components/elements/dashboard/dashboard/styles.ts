import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  p: 3,
} as const;

export const titleStyle: SxProps = {
  mb: 3,
  fontSize: {
    xs: "1.15rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
  },
} as const;

export const statsGridStyle: SxProps = {
  mb: 4,
} as const;
