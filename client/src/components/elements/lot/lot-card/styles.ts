import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

export const footerContainerStyle: SxProps<Theme> = {
  mt: "auto",
  pt: 2,
} as const;

export const priceRowStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  mb: 1,
} as const;

export const statusRowStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  mt: 1,
} as const;

export const chipStyle: SxProps = {
  position: "absolute",
  left: "0.5rem",
  bottom: "0.5rem",
  fontSize: "0.85rem",
  fontWeight: 600,
} as const;

export const dividerStyle: SxProps = {
  mb: 2,
} as const;

export const priceTypographyStyle: SxProps<Theme> = {
  fontSize: "1.05rem",
  fontWeight: 600,
  color: green[500],
} as const;

export const timeTypographyStyle: SxProps<Theme> = {
  fontSize: "1.05rem",
  fontWeight: 600,
  color: (theme) =>
    theme.palette.mode === THEMES_MAP.DARK ? yellow[700] : yellow[800],
} as const;
