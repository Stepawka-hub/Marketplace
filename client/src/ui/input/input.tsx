import { TextField } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { InputProps } from "./type";

export const Input: FC<InputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...props}
      name={name}
      value={field.value || ""}
      onChange={field.onChange}
      error={fieldState.invalid}
      helperText={fieldState.error?.message}
    />
  );
};
