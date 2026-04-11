import { ReactNode } from "react";

export type TFileUploadProps = {
  label: string;
  placeholder?: string;
  accept?: string;
  startIcon?: ReactNode;
  multiple?: boolean;
  onFileSelect: (files: File[]) => void;
};
