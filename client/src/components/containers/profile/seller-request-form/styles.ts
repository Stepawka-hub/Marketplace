import { SxProps, Theme } from "@mui/material";

export const formStyle: SxProps<Theme> = {
  py: 3.5,
  px: 2,
  mx: "auto",
  width: "auto",
  maxWidth: "50rem",
  borderRadius: "1rem",
  backgroundColor: "custom.primary.main",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: (theme: Theme) =>
    theme.palette.mode === "dark"
      ? "custom.primary.main"
      : theme.palette.divider,
} as const;

export const fieldSetStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  gap: 2,
  p: 0,
  border: "none",
  "& .MuiTextField-root": {
    flex: 1,
  },
} as const;
