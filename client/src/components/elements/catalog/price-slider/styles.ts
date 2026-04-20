import { SxProps } from "@mui/material";

export const wrapperStyle: SxProps = {
  width: "100%",
} as const;

export const titleStyle: SxProps = {
  fontSize: {
    xs: "1rem",
    sm: "1.05rem",
    md: "1.1rem",
    lg: "1.15rem",
  },
  fontWeight: 500,
  mb: 1,
} as const;

export const labelBoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
} as const;

export const inputsContainerStyle = {
  display: "flex",
  gap: 2,
  mt: 2,
  mb: 1,
};

export const inputStyle = {
  flex: 1,
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    display: "none",
  },
};
