import { SxProps } from "@mui/material";

export const selectAllContainerStyles: SxProps = {
  borderRadius: 2,
  py: 1,
  px: 2,
  backgroundColor: "custom.primary",
} as const;

export const gridContainerStyle: SxProps = {
  alignItems: "center",
  justifyContent: "space-between",
} as const;

export const removeBtnStyles: SxProps = {
  px: 1.5,
  py: 0.5,
  fontSize: {
    xs: "0.875rem",
    sm: "1rem",
  },
  textTransform: "none",
} as const;
