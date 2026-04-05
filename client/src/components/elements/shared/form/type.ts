import { FormHTMLAttributes, ReactNode } from "react";
import { SxProps, Theme } from '@mui/material';

export type TFormProps = FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
  sx?: SxProps<Theme>;
  children: ReactNode;
};
