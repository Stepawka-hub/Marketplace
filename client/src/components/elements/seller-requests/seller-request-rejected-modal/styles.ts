import { SxProps } from "@mui/material";

export const iconBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  mb: 2,
} as const;

export const errorIconStyle: SxProps = {
  fontSize: 64,
  color: "error.main",
} as const;

export const contentBoxStyle: SxProps = {
  textAlign: "center",
} as const;

export const rejectedReason: SxProps = {
  mt: 2,
  p: 2,
  bgcolor: "action.hover",
  borderRadius: 1,
} as const;

export const actionsStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  mt: 3,
} as const;
