import { SxProps } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const wrapperStyle: SxProps = {
  maxWidth: "60rem",
  p: 3,
  borderRadius: 2,
  backgroundColor: "custom.primary.main",
  border: "1px solid",
  borderColor: "divider",
} as const;

export const profileBoxStyle: SxProps = {
  display: "flex",
  alignItems: {
    xs: "center",
    sm: "flex-start",
  },
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  gap: 3,
  flexWrap: "wrap",
  textAlign: {
    xs: "center",
    sm: "left",
  },
} as const;

export const editButtonStyle: SxProps = {
  alignSelf: {
    xs: "center",
    sm: "flex-start",
  },
  fontWeight: 600,
} as const;

export const balanceValueStyle: SxProps = {
  color: green[500],
  fontWeight: 600,
} as const;

export const frozenBalanceValueStyle: SxProps = {
  color: blue[500],
  fontWeight: 600,
} as const;
