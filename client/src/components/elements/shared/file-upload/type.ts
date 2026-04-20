import { ChangeEvent, ReactNode, RefObject } from "react";

export type TFileUploadUIProps = {
  fileRef: RefObject<HTMLInputElement | null>;
  label: string;
  placeholder?: string;
  accept?: string;
  multiple?: boolean;
  startIcon?: ReactNode;
  error?: boolean;
  helperText?: string;
  handleClick: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
