import { SxProps } from '@mui/material';

export const chartPaperStyle: SxProps = {
  p: 2,
  bgcolor: "custom.primary.main",
  backgroundImage: "none",
  borderRadius: "0.75rem",
} as const;

export const chartTitleStyle: SxProps = {
  mb: 2,
  fontWeight: 600,
} as const;
