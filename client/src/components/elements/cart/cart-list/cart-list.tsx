import { FC } from "react";
import { CartItemUI } from "@/components/elements";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";
import { TCartListUIProps } from "./type";

export const CartListUI: FC<TCartListUIProps> = ({ items, ...props }) => (
  <Grid container sx={gridStyle}>
    {items.map((cartItem) => (
      <CartItemUI key={cartItem.product.id} cartItem={cartItem} {...props} />
    ))}
  </Grid>
);
