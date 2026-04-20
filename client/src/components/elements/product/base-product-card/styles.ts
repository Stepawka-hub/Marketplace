import { SxProps, Theme } from "@mui/material";

export const cardStyle: SxProps<Theme> = {
  backgroundColor: "custom.primary.main",
  display: "flex",
  flexDirection: "column",
  height: "100%",
} as const;

export const cardMediaStyle: SxProps<Theme> = {
  position: "relative",
  height: "32.5vh",
  borderRadius: "1rem",
} as const;

export const cardContentStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
} as const;

export const cardMediaButtonStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  m: 1,
} as const;

export const nameTypographyStyle: SxProps<Theme> = {
  fontSize: "1.25rem",
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
} as const;

export const descTypographyStyle: SxProps<Theme> = {
  flexGrow: 1,
  my: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
} as const;

export const sellerInfoStyle: SxProps = {
  mt: "auto",
} as const;
