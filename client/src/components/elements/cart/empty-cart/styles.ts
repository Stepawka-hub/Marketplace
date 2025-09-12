import { SxProps } from "@mui/material";

export const containerStyle: SxProps = {
  width: "100%",
  mt: 2,
  textAlign: "center",
} as const;

export const titleStyle: SxProps = {
  fontSize: "1.5rem",
  fontWeight: 600,
} as const;

export const textStyle: SxProps = {
  fontSize: "1.15rem",
} as const;

export const linkStyle: SxProps = {
  fontSize: "1.15rem",
  underline: "hover",
} as const;
