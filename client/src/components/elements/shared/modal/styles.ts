import { SxProps } from "@mui/material";

export const modalInnerWrapperStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "calc(100% - 32px)",
    sm: "auto",
  },
  backgroundColor: "custom.primary.main",
  borderRadius: 2,
  boxShadow: 24,
  p: 2.5,
} as const;

export const modalHeaderContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 1,
  ml: 2,
} as const;

export const modalTitleStyle: SxProps = {
  fontSize: "1.35rem",
  fontWeight: 600,
} as const;
