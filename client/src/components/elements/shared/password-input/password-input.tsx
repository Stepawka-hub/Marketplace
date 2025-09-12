import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { FC } from "react";
import { TPasswordInputUIProps } from "./type";

export const PasswordInputUI: FC<TPasswordInputUIProps> = ({
  name,
  label,
  error,
  helperText,
  showPassword,
  onTogglePassword,
  ...props
}) => (
  <FormControl variant="standard" error={error}>
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={onTogglePassword}
            onMouseDown={(e) => e.preventDefault()}
            onMouseUp={(e) => e.preventDefault()}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </InputAdornment>
      }
    />
    <FormHelperText>{helperText}</FormHelperText>
  </FormControl>
);
