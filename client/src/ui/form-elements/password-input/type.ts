import { InputProps } from "@mui/material";

export type PasswordInputProps = InputProps & {
  name: string;
  label?: string;
  placeholder?: string;
};