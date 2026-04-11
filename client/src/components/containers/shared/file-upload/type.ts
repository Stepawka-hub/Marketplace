import { ReactNode } from "react";

export type TFileUploadProps = {
  label: string;
  placeholder?: string;
  accept?: string;
  startIcon?: ReactNode;
  multiple?: boolean;
  error?: boolean;
  helperText?: string;
  onFileSelect: (files: File[]) => void;
};
