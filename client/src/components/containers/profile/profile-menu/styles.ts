import { SxProps, Theme } from "@mui/material";

export const logoutButtonStyle: SxProps<Theme> = ({ palette }) =>
  ({
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
