import { Box, IconButton, styled } from "@mui/material";

export const SliderBox = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "1.25rem",
  cursor: "pointer",
  "&:hover .MuiIconButton-root": {
    opacity: 1
  }
}));

export const SliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "65vh",
  borderRadius: theme.spacing(2),
  cursor: "pointer",
}));

export const SliderButton = styled(IconButton)(() => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#000",
  backgroundColor: "#fff",
  opacity: 0,
  transition: 'opacity .2s ease-in-out',
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
}));
