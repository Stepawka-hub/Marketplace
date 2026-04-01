import { THEMES_MAP } from "@/shared/constants";
import { SxProps, Theme } from "@mui/material";

export const menuPaperStyle: SxProps<Theme> = {
  width: { xs: "auto", md: 280 },
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

export const listItemIconStyle: SxProps<Theme> = {
  minWidth: "auto",
  mr: {
    xs: 0,
    md: 2,
  },
  color: "inherit",
} as const;

export const listItemTextStyle: SxProps = {
  display: {
    xs: "none",
    md: "block",
  },
} as const;

export const listItemButtonStyle: SxProps<Theme> = ({ palette }) =>
  ({
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    "&.active": {
      color: {
        xs:
          palette.mode === THEMES_MAP.DARK
            ? palette.primary.main
            : palette.primary.light,
        md: "white",
      },
      borderRight: {
        xs: "none",
        md: `4px solid 
        ${palette.mode === THEMES_MAP.DARK ? palette.primary.main : palette.primary.light}`,
      },
    },
  }) as const;
