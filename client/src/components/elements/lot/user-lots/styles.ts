import { SxProps } from "@mui/material";

export const lotsContainer: SxProps = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    lg: "repeat(2, 1fr)",
  },
  gap: {
    xs: 1,
    md: 2,
  },
} as const;
