import { RegisterOptions } from "react-hook-form";

export type TForgotPasswordForm = {
  email: string;
};

export type TField = {
  name: keyof TForgotPasswordForm;
  type?: "text" | "password";
  validation?: RegisterOptions<TForgotPasswordForm>;
};
