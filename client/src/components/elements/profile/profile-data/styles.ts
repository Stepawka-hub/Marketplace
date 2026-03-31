import { SxProps } from "@mui/material";

export const avatarStyle: SxProps = {
  width: 128,
  height: 128,
  bgcolor: "primary.main",
  fontSize: 48,
} as const;

export const wrapperStyle: SxProps = {
  p: 3,
  borderRadius: 2,
} as const;

export const profileBoxStyle: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  gap: 3,
  flexWrap: "wrap",
} as const;

export const editButtonStyle: SxProps = {
  alignSelf: "flex-start",
} as const;
