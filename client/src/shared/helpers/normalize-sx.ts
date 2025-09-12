import { SxProps } from "@mui/material";

export const normalizeSx = (sx: SxProps) => {
  if (!sx) return [];
  return Array.isArray(sx) ? sx : [sx];
};
