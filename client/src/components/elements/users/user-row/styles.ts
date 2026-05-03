import { SxProps } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const actionsCellStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
} as const;

export const rolesBoxStyle: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  gap: 0.5,
} as const;

export const balanceValueStyle: SxProps = {
  color: green[500],
  fontWeight: 600,
} as const;

export const frozenBalanceValueStyle: SxProps = {
  color: blue[500],
  fontWeight: 600,
} as const;
