import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const gridMainContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: {
    sm: 2,
    md: 4,
  },
} as const;

export const productImagesStyle: SxProps = {
  flex: "1 1 400px",
  width: "100%",
  minWidth: 280,
  maxWidth: 650,
} as const;

export const productContentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "2 1 300px",
  minWidth: 250,
  gap: 1.5,
} as const;

export const productNameStyle: SxProps = {
  mb: 3,
  fontSize: {
    xs: "1.5rem",
    sm: "1.75rem",
    md: "2rem",
  },
  fontWeight: 600,
} as const;

export const dividerStyle: SxProps = {
  my: 3,
} as const;

export const countdownTimerWrapperStyle: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
  p: 2,
  backgroundColor: "custom.primary.main",
  fontSize: {
    xs: "1.05rem",
    sm: "1.25rem",
    md: "1.35rem",
  },
  fontWeight: 600,
  color: (theme) =>
    theme.palette.mode === THEMES_MAP.DARK ? yellow[700] : yellow[800],
} as const;
