import { SxProps } from "@mui/material";

export const tabsStyle: SxProps = {
  borderBottom: 1,
  borderColor: "divider",
  mb: 3,
} as const;

export const tabStyle: SxProps = {
  fontWeight: "bold",
  "&.active": {
    color: "primary.main",
  },
} as const;
