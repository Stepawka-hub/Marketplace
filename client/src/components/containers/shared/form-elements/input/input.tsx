import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { InputProps } from "./type";
import { inputStyle } from "./styles";

// Todo: Исправить цвет input`а на тёмной теме при подстановке значений
export const Input: FC<InputProps> = ({
  name,
  startIcon,
  helperText,
  step,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  return (
    <TextField
      {...props}
      variant="outlined"
      name={name}
      value={field.value || ""}
      error={fieldState.invalid}
      helperText={fieldState.error?.message || helperText}
      slotProps={{
        input: {
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        },
        htmlInput: {
          step,
        },
        formHelperText: {
          sx: {
            marginLeft: 0,
          },
        },
      }}
      sx={inputStyle}
      onChange={field.onChange}
    />
  );
};
