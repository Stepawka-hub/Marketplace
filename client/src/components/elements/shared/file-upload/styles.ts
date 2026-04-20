import { SxProps } from "@mui/material";

export const labelStyle = (error: boolean): SxProps => ({
  fontSize: "0.9rem",
  color: error ? "error.main" : "text.primary",
});

export const helperTextStyle: SxProps = {
  display: "block",
  mt: 0.5,
} as const;

export const uploadButtonStyle = (error: boolean): SxProps => ({
  borderColor: error ? "error.main" : undefined,
  color: error ? "error.main" : undefined,
  "&:hover": {
    borderColor: error ? "error.dark" : undefined,
  },
});
