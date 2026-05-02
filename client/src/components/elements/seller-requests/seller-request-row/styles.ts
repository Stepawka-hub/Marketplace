import { SxProps } from "@mui/material";

export const actionsCellStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
} as const;

export const emptyCellStyle: SxProps = {
  fontSize: "0.85rem",
  fontStyle: "italic",
  whiteSpace: "nowrap",
  textAlign: "center",
} as const;

export const userInfoStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1.5,
} as const;

export const statusChipStyle: SxProps = {
  textTransform: "capitalize",
} as const;

export const expandCellStyle: SxProps = {
  textAlign: "center",
  width: 60,
} as const;

export const descriptionRowStyle: SxProps = {
  "& .MuiTableCell-root": {
    borderBottom: "none",
    pt: 0,
    pb: 0,
  },
} as const;

export const descriptionBoxStyle: SxProps = {
  p: 2,
  bgcolor: "custom.primary.main",
} as const;

export const popoverContentStyle: SxProps = {
  p: 2,
  width: 300,
  maxWidth: "calc(100vw - 32px)",
} as const;

export const popoverActionsStyle: SxProps = {
  display: "flex",
  gap: 1,
  justifyContent: "flex-end",
} as const;
