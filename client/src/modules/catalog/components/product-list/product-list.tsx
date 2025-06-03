import { getProducts } from "@modules/catalog/services/slices/catalog";
import { Grid } from "@mui/material";
import { useSelector } from '@store';
import { FC } from "react";
import { ProductCard } from "../product-card";

export const ProductList: FC = () => {
  const products = useSelector(getProducts); 

  return (
    <Grid container spacing={2}>
      {products.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard name={p.name} description={p.description} />
        </Grid>
      ))}
    </Grid>
  );
};
