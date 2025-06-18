import { FormHTMLAttributes, ReactNode } from "react";

export type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  title?: string;
  children: ReactNode;
};
