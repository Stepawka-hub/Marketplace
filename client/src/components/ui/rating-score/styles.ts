import { SxProps } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const gridContainerStyle: SxProps = {
  alignItems: "center",
  gap: 0.5,
} as const;

export const starRateIconStyle: SxProps = {
  marginBottom: "0.145rem",
  color: yellow[800],
} as const;
