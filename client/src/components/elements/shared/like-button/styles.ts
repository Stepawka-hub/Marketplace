import { alpha, SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const likeButtonStyles: SxProps<Theme> = {
  backgroundColor: (theme: Theme) => theme.palette.custom.primary.main,
  color: red[600],
  
  "&.Mui-disabled": {
    backgroundColor: (theme: Theme) => 
      theme.palette.mode === 'light' 
        ? theme.palette.custom.primary.main
        : theme.palette.custom.primary.main,
    color: (theme: Theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600],
    pointerEvents: 'none',
  },
  
  "&:hover": {
    backgroundColor: (theme: Theme) =>
      alpha(theme.palette.custom.primary.main, 0.75),
  },
};