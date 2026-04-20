import { SxProps } from "@mui/material";

export const productInfoStyle: SxProps = {
  mb: 2,
  p: 2,
  bgcolor: "action.hover",
  borderRadius: 2,
} as const;

export const productDataStyle: SxProps = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  alignItems: "center",
  gap: 2,
  mt: 1,
} as const;

export const productNameStyle: SxProps = {
  fontSize: {
    xs: "1.1rem",
    md: "1.25rem",
  },
  fontWeight: 500,
  lineHeight: {
    xs: "1.25",
    md: "1.35",
  },
  textAlign: {
    xs: "center",
    md: "left",
  },
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: {
    xs: 3,
    md: 5,
  },
  WebkitBoxOrient: "vertical",
  wordBreak: "break-word",
} as const;

export const productPreviewStyle: SxProps = {
  width: {
    xs: 192,
    sm: 160,
    md: 144,
  },
  height: {
    xs: 192,
    sm: 160,
    md: 144,
  },
  objectFit: "cover",
} as const;

export const dividerStyle: SxProps = {
  mt: 2,
} as const;
