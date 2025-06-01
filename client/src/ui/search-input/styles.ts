import { alpha, InputBase, styled } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
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

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100ch",
    },
  },
}));
