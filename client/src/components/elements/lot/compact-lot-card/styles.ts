import { SxProps, Theme } from "@mui/material";

export const compactCardStyle: SxProps<Theme> = {
  p: 2,
  borderRadius: 2,
  backgroundColor: "background.paper",
  border: "1px solid",
  borderColor: "divider",
  transition: "all 0.2s",
  "&:hover": {
    borderColor: "primary.main",
    boxShadow: 1,
  },
} as const;

export const compactCardContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "flex-start",
  gap: 2,
} as const;

export const compactCardImage: SxProps<Theme> = {
  width: 80,
  height: 80,
  borderRadius: 1,
  objectFit: "cover",
  flexShrink: 0,
  backgroundColor: "action.hover",
} as const;

export const compactCardRight: SxProps<Theme> = {
  flex: 1,
  minWidth: 0,
} as const;

export const compactCardContent: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  mb: 1,
} as const;

export const compactNameStyle: SxProps<Theme> = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  flex: 1,
  mr: 1,
  fontWeight: 500,
} as const;

export const compactChipStyle: SxProps = {
  flexShrink: 0,
} as const;

export const compactCardFooter: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 2,
  mt: 1,
  pt: 1,
} as const;
