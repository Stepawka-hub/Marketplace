import { alpha, SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const likeButtonStyles: SxProps<Theme> = {
  backgroundColor: "custom.primary.main",
  color: red[600],
  "&:hover": {
    backgroundColor: (theme: Theme) =>
      alpha(theme.palette.custom.primary.main, 0.75),
  },
};
