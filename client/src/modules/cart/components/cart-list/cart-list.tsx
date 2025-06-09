import { FC } from "react";
import { CartItem } from "../cart-item";
import { Grid } from "@mui/material";

export const CartList: FC = () => {
  return (
    <Grid container spacing={2} flexDirection="column">
      {[...Array(8)].map((_, i) => (
        <CartItem key={i} />
      ))}
    </Grid>
  );
};
