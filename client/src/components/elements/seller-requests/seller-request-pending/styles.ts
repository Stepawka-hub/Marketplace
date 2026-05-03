import { SxProps, Theme } from "@mui/material";

export const pendingContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  alignItems: "center",
  textAlign: {
    xs: "center",
    sm: "left",
  },
  gap: {
    xs: 0,
    sm: 3,
  },
  p: {
    xs: 3,
    sm: 4,
  },
  borderRadius: 2,
  bgcolor: "custom.primary.main",
} as const;

export const iconStyle: SxProps = {
  flexShrink: 0,
} as const;

export const pendingIconStyle: SxProps = {
  fontSize: {
    xs: 48,
    sm: 64,
  },
  color: "warning.main",
} as const;

export const contentStyle: SxProps = {
  flex: 1,
} as const;

export const titleStyle: SxProps = {
  fontSize: {
    xs: "1.25rem",
    sm: "1.5rem",
  },
  fontWeight: 600,
  mb: 1,
} as const;

export const messageStyle: SxProps = {
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
  },
  color: "text.secondary",
} as const;
