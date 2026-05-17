import { SxProps } from "@mui/material";
import { green } from "@mui/material/colors";

export const dialogStyle: SxProps = {
  "& .MuiDialog-paper": {
    backgroundColor: "custom.primary.main",
    borderRadius: "0.5rem",
  },

  "& .MuiDialog-paper > *": {
    backgroundColor: "custom.primary.main",
  },
} as const;

export const buttonsContainerStyle: SxProps = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  mt: 1,
} as const;

export const titleContainerStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: 1,
} as const;

export const titleIconStyle: SxProps = {
  color: green[500],
  fontSize: "1.5rem",
} as const;

export const minAmountHintStyle: SxProps = {
  display: "block",
  textAlign: "right",
  color: "text.secondary",
  fontSize: "0.75rem",
  mt: -1,
} as const;
