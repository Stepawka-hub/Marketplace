import { IconButton, styled } from "@mui/material";

export const SliderButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  opacity: 0,
  transition: "opacity .2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
