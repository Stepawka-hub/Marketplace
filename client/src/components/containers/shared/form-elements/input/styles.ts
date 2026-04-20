import { SxProps, Theme } from "@mui/material";
import { THEMES_MAP } from "@/shared/constants";

export const inputStyle: SxProps<Theme> = {
  "& .MuiInputLabel-root": {
    "&.Mui-focused :not(.Mui-error)": {
      color: (theme) =>
        theme.palette.mode === THEMES_MAP.DARK
          ? "primary.light"
          : "primary.main",
    },
  },
  ".MuiInputBase-input": {
    pl: 0.5,
  },
  "& input[type='datetime-local']::-webkit-calendar-picker-indicator": {
    filter: (theme) =>
      theme.palette.mode === THEMES_MAP.DARK ? "invert(1)" : undefined,
    cursor: "pointer",
  },
} as const;
