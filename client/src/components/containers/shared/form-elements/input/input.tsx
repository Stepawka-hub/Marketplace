import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";
import { InputProps } from "./type";

// Todo: Исправить цвет input`а на тёмной теме при подстановке значений
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
      variant="standard"
    />
  );
};
