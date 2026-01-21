import { SxProps, Theme } from "@mui/material";

export const passwordInputLabelStyle: SxProps<Theme> = {
  "&.Mui-focused :not(.Mui-error)": {
    color: (theme) =>
      theme.palette.mode === "dark" ? "primary.light" : "primary.main",
  },  
} as const;

export const passwordInputStyle: SxProps<Theme> = {
  ".MuiInputBase-input": {
    pl: 0.5,
  } 
} as const;