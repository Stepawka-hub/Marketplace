import { getProducts } from "@modules/catalog/services/slices/catalog";
import { Grid } from "@mui/material";
import { useSelector } from "@store";
import { FC, memo } from "react";
import { ProductCard } from "../product-card";

export const ProductList: FC = memo(() => {
  const products = useSelector(getProducts);

  return (
    <Grid container spacing={2} columns={10}>
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 3, lg: 2 }}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
});
