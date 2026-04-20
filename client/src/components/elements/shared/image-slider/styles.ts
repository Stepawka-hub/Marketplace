import { SxProps } from "@mui/material";

export const sliderStyle: SxProps = {
  maxHeight: 650,
} as const;

export const leftBtnStyle: SxProps = {
  backgroundColor: "custom.primary.main",
  left: 15,
  transition: "opacity 0.2s ease",
  "&:hover": {
    backgroundColor: "custom.primary.main",
  },
} as const;

export const rightBtnStyle: SxProps = {
  backgroundColor: "custom.primary.main",
  right: 15,
  transition: "opacity 0.2s ease",
  "&:hover": {
    backgroundColor: "custom.primary.main",
  },
} as const;
