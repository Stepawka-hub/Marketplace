import { SxProps } from "@mui/material";
import { green, yellow } from "@mui/material/colors";

export const cardStyle: SxProps = {
  cursor: "default",
  flexDirection: "row",
  height: "auto",
  borderRadius: "0.75rem",
  backgroundColor: "custom.primary.main",
  "&:hover": {
    transform: "none",
  },
} as const;

export const cardContentStyle: SxProps = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr 1fr",
  alignItems: "center",
  width: "100%",
  gap: 2,
  p: 0,
  mx: {
    xs: 0,
    md: 4,
  },
  "&:last-child": {
    pb: 0,
  },
} as const;

export const userInfoStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
} as const;

export const leaderIconStyle: SxProps = {
  color: yellow[700],
} as const;

export const priceStyle = (isLeading: boolean): SxProps => ({
  fontWeight: "600",
  fontSize: isLeading ? "1.05rem" : "1rem",
  color: isLeading ? green[600] : "primary.text.main",
  whiteSpace: "nowrap",
});

export const timeStyle: SxProps = {
  whiteSpace: "nowrap",
};
