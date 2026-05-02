import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";
import { blue } from "@mui/material/colors";

export const badgeStyle: SxProps<Theme> = (theme) => ({
  color: theme.palette.mode === THEMES_MAP.DARK ? blue[700] : blue[300],
});
