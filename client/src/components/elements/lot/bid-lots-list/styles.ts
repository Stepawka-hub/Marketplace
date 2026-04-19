import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: {
    xs: "1fr",
    xl: "repeat(2, 1fr)",
  },
  gap: {
    xs: 1,
    md: 2,
  },
} as const;
