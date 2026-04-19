import { SxProps } from "@mui/material";

export const bidsGridStyle: SxProps = {
  columnCount: {
    md: 1,
    lg: 2,
  },
  columnGap: 2,
  "& > *": {
    marginBottom: 2,
  },
} as const;
