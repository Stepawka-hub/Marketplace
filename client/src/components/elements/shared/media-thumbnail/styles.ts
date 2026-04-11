import { CSSProperties } from "react";
import { SxProps, Theme } from "@mui/material";

export const thumbnailStyle = (isMain: boolean): SxProps<Theme> => ({
  position: "relative",
  width: 128,
  height: 128,
  flexShrink: 0,
  overflow: "hidden",
  cursor: "pointer",
  border: isMain ? "3px solid" : "1px solid",
  borderColor: isMain ? "primary.main" : "divider",
  "&:hover .thumbnail-image": {
    opacity: 0.8,
    transform: "scale(1.025)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
  },
  "&:has(.MuiIconButton-root:hover) .thumbnail-image": {
    opacity: 1,
    transform: "scale(1)",
  },
});

export const imageStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
  objectPosition: "center",
  backgroundColor: "grey.100",
};

export const deleteButtonStyle: SxProps<Theme> = {
  position: "absolute",
  top: 1,
  right: 1,
  backgroundColor: "custom.primary.main",
  ":hover": {
    opacity: 0.9,
    backgroundColor: "custom.primary.main",
  },
} as const;

export const mainBadgeStyle: SxProps<Theme> = {
  position: "absolute",
  bottom: 4,
  left: 4,
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  px: 0.5,
  borderRadius: 1,
  bgcolor: "primary.main",
  color: "white",
  fontSize: "10px",
} as const;

export const starIconStyle: SxProps<Theme> = {
  fontSize: 12,
} as const;
