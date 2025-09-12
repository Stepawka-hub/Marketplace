import { alpha, styled } from "@mui/material";

export const SearchWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  borderRadius: theme.shape.borderRadius + 16,
  backgroundColor:
    theme.palette.mode === "light"
      ? alpha(theme.palette.common.black, 0.05)
      : alpha(theme.palette.common.white, 0.1),
  transition: theme.transitions.create(["background-color", "box-shadow"], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeInOut,
  }),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? alpha(theme.palette.common.black, 0.075)
        : alpha(theme.palette.common.white, 0.15),
  },
  "&:focus-within": {
    boxShadow: theme.shadows[1],
  },
}));
