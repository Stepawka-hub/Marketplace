import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";
import { InputProps } from "./type";

// Todo: Исправить цвет input`а на тёмной теме при подстановке значений
export const Input: FC<InputProps> = ({ name, startIcon, ...props }) => {
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
      helperText={fieldState.error?.message}
      slotProps={{
        input: {
          startAdornment: startIcon && (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ),
        },
        formHelperText: {
          sx: {
            marginLeft: 0,
          },
        },
      }}
      sx={{
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: (theme) =>
              theme.palette.mode === "dark" ? "primary.light" : "primary.main",
          },
        },
      }}
      onChange={field.onChange}
    />
  );
};
