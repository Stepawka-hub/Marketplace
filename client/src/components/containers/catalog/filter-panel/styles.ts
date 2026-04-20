import { SxProps } from "@mui/material";

const drawerWidth = 360;
const drawerMarginRight = 3;

export const drawerStyle: Record<string, SxProps> = {
  base: {
    width: 0,
    mr: 0,
    flexShrink: 1,
  },
  active: {
    width: {
      xs: "auto",
      sm: drawerWidth,
    },
    mr: drawerMarginRight,
  },
} as const;

export const filterBoxStyle: SxProps = {
  mb: 1,
} as const;

export const priceSliderBoxStyle: SxProps = {
  px: 4,
} as const;

export const dividerStyle: SxProps = {
  mb: 1,
} as const;

export const applyBtnBoxStyle: SxProps = {
  justifyContent: "center",
} as const;

export const applyBtnStyle: SxProps = {
  flexGrow: 1,
  whiteSpace: "nowrap",
  overflow: "hidden",
} as const;
