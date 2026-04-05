import { TextFieldProps } from "@mui/material";
import { ReactNode } from 'react';

export type InputProps = TextFieldProps & {
  name: string;
  startIcon?: ReactNode;
};
