import { Card as CardMui, styled } from "@mui/material";

export const Card = styled(CardMui)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "1rem",
  borderRadius: "1.5rem",
  cursor: "pointer",
  transition: "transform .3s ease, opacity .2s ease",
  "&:hover": {
    transform: "translateY(-0.5rem)",
  },
}));
