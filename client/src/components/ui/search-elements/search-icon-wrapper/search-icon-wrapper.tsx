import { styled } from "@mui/material";
import { TSearchIconWrapperProps } from "./types";

export const SearchIconWrapper = styled("div", {
  shouldForwardProp: (prop) => prop !== "active",
})<TSearchIconWrapperProps>(({ theme, active }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: active ? theme.palette.text.primary : theme.palette.text.disabled,
  transition: theme.transitions.create("color", {
    duration: theme.transitions.duration.shorter,
  }),
}));
