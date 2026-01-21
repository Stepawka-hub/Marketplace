
import { SxProps, Theme } from "@mui/material";

export const inputStyle: SxProps<Theme> = {
  "& .MuiInputLabel-root": {
    "&.Mui-focused :not(.Mui-error)": {
      color: (theme) =>
        theme.palette.mode === "dark" ? "primary.light" : "primary.main",
    },
  },
  ".MuiInputBase-input": {
    pl: 0.5,
  }
} as const;
