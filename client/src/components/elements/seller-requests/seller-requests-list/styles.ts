import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  p: 3,
} as const;

export const titleStyle: SxProps = {
  mb: 3,
  fontSize: {
    xs: '1rem',
    sm: '1.1rem',
    md: '1.15rem',
    lg: '1.25rem'
  }
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

export const actionsTitleStyle: SxProps = {
  textAlign: "right",
} as const;