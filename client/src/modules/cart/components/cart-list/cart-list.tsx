import { FC } from "react";
import { CartItem } from "../cart-item";
import { Grid } from "@mui/material";
import { useSelector } from "@store";
import { getProducts } from "@modules/cart/services/slices/cart";

export const CartList: FC = () => {
  const products = useSelector(getProducts);

  return (
    <Grid container spacing={2} flexDirection="column">
      {products.map((p, i) => (
        <CartItem
          key={i}
          id={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
        />
      ))}
    </Grid>
  );
};
