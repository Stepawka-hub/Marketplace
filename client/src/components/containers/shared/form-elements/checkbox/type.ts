import { ReactNode } from 'react';

export type TCheckboxProps = {
  name: string;
  label: string | ReactNode;
  size?: "small" | "medium";
  disabled?: boolean;
};
