import { Box, IconButton, styled } from "@mui/material";

export const SliderBox = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "60vh",
  overflow: "hidden",
  borderRadius: "1rem",
  cursor: "pointer",
  "&:hover .MuiIconButton-root": {
    opacity: 1,
  },
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

export const SliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  objectFit: "cover",
  objectPosition: "center",
}));

export const SliderButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#000",
  backgroundColor: "#fff",
  opacity: 0,
  transition: "opacity .2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
}));
