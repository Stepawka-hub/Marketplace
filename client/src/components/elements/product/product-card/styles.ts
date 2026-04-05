import { SxProps, Theme } from "@mui/material";

export const cardStyle: SxProps<Theme> = {
  backgroundColor: "custom.primary.main",
} as const;

export const cardMediaStyle: SxProps<Theme> = {
  height: "32.5vh",
  borderRadius: "1rem",
} as const;

export const cardContentStyle: SxProps<Theme> = {
  flexGrow: 1,
} as const;

export const boxLikeButtonStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end",
  m: 1,
} as const;

export const priceTypographyStyle: SxProps<Theme> = {
  mb: 1,
  fontSize: "1.25rem",
  fontWeight: 600,
} as const;

export const nameTypographyStyle: SxProps<Theme> = {
  fontSize: "1.25rem",
  fontWeight: 500,
} as const;

export const descTypographyStyle: SxProps<Theme> = {
  my: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
} as const;
