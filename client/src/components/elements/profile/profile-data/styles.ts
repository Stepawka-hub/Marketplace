import { SxProps } from "@mui/material";

export const wrapperStyle: SxProps = {
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
