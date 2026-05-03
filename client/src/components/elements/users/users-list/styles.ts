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

export const tableStyle: SxProps = {
  borderCollapse: "collapse",
  "& .MuiTableCell-root": {
    borderBottom: "none",
  },
  "& .MuiTableRow-root": {
    borderBottom: "1px solid",
    borderColor: "divider",
  },
} as const;

export const tableHeadStyle: SxProps = {
  backgroundColor: "custom.primary.main",
} as const;

export const actionsCellStyle: SxProps = {
  whiteSpace: "nowrap",
} as const;