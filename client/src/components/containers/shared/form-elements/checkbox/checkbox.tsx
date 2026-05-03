// components/elements/CheckboxItem/CheckboxItem.tsx
import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";
import { TCheckboxProps } from "./type";

export const Checkbox: FC<TCheckboxProps> = ({
  name,
  label,
  size = "small",
  disabled,
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={
            <MuiCheckbox
              size={size}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
              disabled={disabled}
              sx={{
                mr: 0.5,
              }}
            />
          }
          label={label}
        />
      )}
    />
  );
};
