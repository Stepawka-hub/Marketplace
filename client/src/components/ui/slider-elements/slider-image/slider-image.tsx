import { styled } from "@mui/material";

export const SliderImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.spacing(2),
  cursor: "pointer",
  objectFit: "cover",
  objectPosition: "center",
}));
