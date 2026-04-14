import { SxProps } from "@mui/material";

export const cardContainerStyle = (minCardWidth: number): SxProps => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(${minCardWidth}px, 1fr))`,
  gap: {
    xs: 2,
    md: 3,
  },
});

