import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";

export const menuPaperStyle: SxProps<Theme> = {
  width: 280,
  borderRadius: 2,
  backgroundColor: (theme) =>
    theme.palette.mode === THEMES_MAP.DARK
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
} as const;

export const listItemStyle: SxProps<Theme> = {
  "&:first-of-type .MuiListItemButton-root": {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
} as const;

export const listItemButtonStyle: SxProps<Theme> = ({ palette }) =>
  ({
    "&.active": {
      borderRight: `4px solid 
        ${palette.mode === THEMES_MAP.DARK ? palette.primary.main : palette.primary.light}`,
    },
  }) as const;
