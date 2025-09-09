import { InputProps } from '@mui/material';

export type TPasswordInputUIProps = InputProps & {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  showPassword?: boolean;
  onTogglePassword?: () => void;
};