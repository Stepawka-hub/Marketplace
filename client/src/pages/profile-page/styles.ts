import { SxProps } from "@mui/material";

export const gridContainerStyle: SxProps = {
  columnGap: { xs: 2, sm: 3, md: 4 },
  mt: 1,
} as const;

export const contentGridStyle: SxProps = {
  flex: 1,
} as const;
