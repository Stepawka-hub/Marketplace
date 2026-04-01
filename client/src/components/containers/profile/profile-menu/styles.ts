import { SxProps, Theme } from "@mui/material";

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

export const logoutButtonStyle: SxProps<Theme> = ({ palette }) =>
  ({
    display: "flex",
    justifyContent: { 
      xs: "center", 
      md: "flex-start" 
    },
    alignItems: "center",
    ml: {
      xs: 0.5,
      md: 0,
    },
    px: { 
      xs: 0, 
      md: 2 
    },
    color: "error.main",
    "&:hover": {
      backgroundColor:
        palette.mode === "dark"
          ? "rgba(211, 47, 47, 0.08)"
          : "rgba(211, 47, 47, 0.04)",
    },
    "&:last-of-type": {
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
    },
  }) as const;
