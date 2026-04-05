import { SxProps } from "@mui/material";

export const usernameStyle: SxProps = {
  maxWidth: "12.5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as const;

export const logoutMenuItemStyle: SxProps = {
  color: "error.main",
} as const;

export const avatarStyle: SxProps = {
  bgcolor: "primary.main",
} as const;
