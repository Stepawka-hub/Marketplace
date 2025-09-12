import { InputProps } from '@mui/material';

export type TPasswordInputProps = InputProps & {
  name: string;
  label?: string;
  placeholder?: string;
};
