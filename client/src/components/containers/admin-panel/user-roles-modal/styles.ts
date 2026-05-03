import { SxProps } from "@mui/material";

export const contentBoxStyle: SxProps = {
  display: "flex",
  gap: 4,
  justifyContent: "center",
  mt: 2,
} as const;

export const paperStyle: SxProps = {
  p: 2,
  width: "100%",
} as const;

export const roleItemStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: 1,
  border: "1px solid",
  borderColor: "divider",
  borderRadius: 1,
} as const;

export const rolesListStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
} as const;