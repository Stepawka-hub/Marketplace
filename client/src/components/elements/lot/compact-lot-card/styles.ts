import { SxProps, Theme } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

export const compactCardStyle: SxProps<Theme> = {
  p: 2,
  borderRadius: 2,
  backgroundColor: "custom.primary.main",
  border: "1px solid",
  borderColor: "divider",
  transition: "all 0.2s",
  cursor: "pointer",
  "&:hover": {
    borderColor: "primary.main",
    boxShadow: 1,
  },
} as const;

export const compactCardContainer: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 2,
} as const;

export const compactCardImage: SxProps<Theme> = {
  width: 96,
  height: 96,
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
  gap: 1,
  mb: 1,
} as const;

export const compactNameStyle: SxProps<Theme> = {
  display: "-webkit-box",
  WebkitLineClamp: {
    xs: 2,
    md: 1,
  },
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  flex: 1,
  mr: 1,
  fontSize: {
    xs: "1rem",
    sm: "1.05rem",
    md: "1.1rem",
  },
  fontWeight: 500,
} as const;

export const compactChipStyle: SxProps = {
  p: 0.5,
  flexShrink: 0,
  fontSize: "0.9rem",
  fontWeight: 600,
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

export const timeStyle: SxProps = {
  fontSize: {
    xs: "0.85rem",
    sm: "0.9rem",
    md: "0.95rem",
    lg: "1rem",
  },
  fontWeight: 600,
  color: yellow[800],
} as const;

export const priceStyle: SxProps = {
  color: green[500],
  fontSize: {
    xs: "1rem",
    sm: "1.05rem",
    md: "1.1rem",
  },
  fontWeight: 600,
} as const;
