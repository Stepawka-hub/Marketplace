import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  p: 3,
} as const;

export const titleStyle: SxProps = {
  mb: 3,
} as const;

export const tableContainerStyle: SxProps = {
  overflowX: "auto",
} as const;

export const actionsCellStyle: SxProps = {
  display: "flex",
  gap: 1,
  alignItems: "center",
} as const;

export const statusChipStyle: SxProps = {
  textTransform: "capitalize",
} as const;
