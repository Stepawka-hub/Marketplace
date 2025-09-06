import { SxProps, Theme } from "@mui/material";

export const backDropStyle: SxProps<Theme> = {
  zIndex: (theme) => theme.zIndex.drawer + 1,
} as const;
