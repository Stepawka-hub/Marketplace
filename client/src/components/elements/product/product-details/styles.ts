import { SxProps } from "@mui/material";

export const gridMainContainerStyle: SxProps = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: {
    sm: 2,
    md: 4,
  },
} as const;

export const productImagesStyle: SxProps = {
  flex: "1 1 400px",
  width: "100%",
  minWidth: 280,
  maxWidth: 650,
} as const;

export const productContentStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  flex: "2 1 300px",
  minWidth: 250,
  gap: 1.5,
} as const;

export const productNameStyle: SxProps = {
  mb: 2,
  fontSize: "2rem",
  fontWeight: 600,
} as const;

export const dividerStyle: SxProps = {
  my: 3,
} as const;
