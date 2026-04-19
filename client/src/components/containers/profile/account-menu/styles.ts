import { SxProps } from "@mui/material";
import { blue } from "@mui/material/colors";

export const usernameStyle: SxProps = {
  maxWidth: "12.5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
} as const;

export const logoutMenuItemStyle: SxProps = {
  color: "error.main",
} as const;

export const lockIconStyle: SxProps = {
  color: blue[700],
} as const;
