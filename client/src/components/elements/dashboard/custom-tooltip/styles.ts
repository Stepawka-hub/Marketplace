import { SxProps } from "@mui/material";

export const customTooltipStyle: SxProps = {
  bgcolor: "custom.primary.main",
  backgroundImage: "none",
  p: 1.5,
  border: 1,
  borderColor: "divider",
  borderRadius: 1,
  boxShadow: 1,
} as const;
