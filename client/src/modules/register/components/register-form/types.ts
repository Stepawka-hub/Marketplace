import { RegisterOptions } from "react-hook-form";

export type TRegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  repeatPassword: string;
};

export type TField = {
  name: keyof TRegisterForm;
  type?: "text" | "phone" | "password";
  validation?: RegisterOptions<TRegisterForm>;
};
