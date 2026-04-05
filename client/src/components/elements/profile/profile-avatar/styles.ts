import { SxProps } from "@mui/material";

export const avatarContainerStyle: SxProps = {
  position: "relative",
  width: 100,
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

export const avatarStyle: SxProps = {
  width: "100%",
  height: "100%",
  fontSize: 40,
  bgcolor: "primary.main",
} as const;

export const cameraButtonStyle: SxProps = {
  position: "absolute",
  bottom: 0,
  right: 0,
  bgcolor: "background.paper",
  boxShadow: 1,
  "&:hover": {
    bgcolor: "background.paper",
    opacity: 0.8,
  },
} as const;

export const loaderStyle: SxProps = {
  position: "absolute",
  color: "text.primary",
} as const;
