import { alpha, SxProps } from "@mui/material";
import { blue, green, orange } from "@mui/material/colors";

export const cardStyle: SxProps = {
  height: "100%",
  backgroundColor: "custom.primary.main",
  borderRadius: "0.75rem",
  p: 1,
  backgroundImage: "none",
} as const;

export const cardContentStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
} as const;

export const avatarStyle = (color: string, isDark: boolean): SxProps => {
  const bgColors = {
    primary: {
      bgcolor: alpha(blue[500], isDark ? 0.2 : 0.1),
      color: blue[500],
    },
    success: {
      bgcolor: alpha(green[500], isDark ? 0.2 : 0.1),
      color: green[500],
    },
    warning: {
      bgcolor: alpha(orange[500], isDark ? 0.2 : 0.1),
      color: orange[500],
    },
  };

  return {
    width: 72,
    height: 72,
    ...bgColors[color as keyof typeof bgColors],
    "& .MuiSvgIcon-root": {
      fontSize: "2.25rem",
    },
  } as const;
};

export const trendStyle = (direction: "up" | "down"): SxProps =>
  ({
    color: direction === "up" ? "success.main" : "error.main",
  }) as const;
