import { RegisterOptions } from "react-hook-form";

export type TLoginForm = {
  email: string;
  password: string;
};

export type TField = {
  name: keyof TLoginForm;
  type?: "text" | "password";
  validation?: RegisterOptions<TLoginForm>;
};
