import { alpha, SxProps, Theme } from "@mui/material";
import { red } from "@mui/material/colors";

export const likeButtonStyles: SxProps<Theme> = {
  backgroundColor: "custom.primary",
  color: red[600],
  "&:hover": {
    backgroundColor: (theme: Theme) =>
      alpha(theme.palette.custom.primary, 0.75),
  },
};
