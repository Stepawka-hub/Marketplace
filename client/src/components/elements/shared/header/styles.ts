import { SxProps } from "@mui/material";

export const toolbarStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  p: 2,
} as const;

export const headerPartStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 2,
} as const;
