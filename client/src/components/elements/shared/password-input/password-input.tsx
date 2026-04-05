import { FC } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PasswordIcon from "@mui/icons-material/Lock";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { TPasswordInputUIProps } from "./type";
import { passwordInputLabelStyle, passwordInputStyle } from "./styles";

export const PasswordInputUI: FC<TPasswordInputUIProps> = ({
  label,
  error,
  helperText,
  showPassword,
  onTogglePassword,
  ...props
}) => (
  <FormControl error={error}>
    <InputLabel
      htmlFor="outlined-adornment-password"
      sx={passwordInputLabelStyle}
    >
      {label}
    </InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      label={label}
      type={showPassword ? "text" : "password"}
      autoComplete="current-password"
      startAdornment={
        <InputAdornment position="start">
          <PasswordIcon />
        </InputAdornment>
      }
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={
              showPassword ? "Hide the password" : "Show the password"
            }
            onClick={onTogglePassword}
            onMouseDown={(e) => e.preventDefault()}
            onMouseUp={(e) => e.preventDefault()}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </IconButton>
        </InputAdornment>
      }
      sx={passwordInputStyle}
      {...props}
    />
    <FormHelperText sx={{ ml: 0 }}>{helperText}</FormHelperText>
  </FormControl>
);
