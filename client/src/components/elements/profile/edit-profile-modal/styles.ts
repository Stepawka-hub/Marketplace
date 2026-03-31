import { SxProps } from "@mui/material";

export const modalInnerWrapperStyle: SxProps = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "custom.primary.main",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
} as const;

export const modalHeaderContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mb: 2,
  ml: 2
} as const;
