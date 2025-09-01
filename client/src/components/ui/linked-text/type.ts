import { SxProps, Theme } from "@mui/material";

export type LinkedTextProps = {
  to: string;
  text: string;
  linkText: string;
  sx?: SxProps<Theme>;
};
