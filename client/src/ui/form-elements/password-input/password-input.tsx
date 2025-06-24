import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { FC, MouseEvent, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { PasswordInputProps } from "./type";

export const PasswordInput: FC<PasswordInputProps> = ({
  name,
  label,
  ...props
}) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });
  const { invalid } = fieldState;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleMouseUpPassword = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <FormControl variant="standard" error={invalid}>
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <Input
        {...props}
        autoComplete="true"
        name={name}
        type={showPassword ? "text" : "password"}
        value={field.value || ""}
        onChange={field.onChange}
        aria-describedby="password-helper-text"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText id="password-helper-text">
        {fieldState.error?.message}
      </FormHelperText>
    </FormControl>
  );
};
