import { BackButton } from "@components/back-button";
import { Cart } from "@modules/cart";
import { Box } from "@mui/material";
import { FC } from "react";

export const CartPage: FC = () => (
  <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
    <BackButton />
    <Cart />
  </Box>
);
