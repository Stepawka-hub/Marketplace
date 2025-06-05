import {
  getProducts,
  getSearchQuery,
} from "@modules/catalog/services/slices/catalog";
import { Grid } from "@mui/material";
import { useSelector } from "@store";
import { FC, memo } from "react";
import { ProductCard } from "../product-card";
import { includesRow } from "@shared/helpers/filter";

export const ProductList: FC = memo(() => {
  const searchQuery = useSelector(getSearchQuery);
  const products = useSelector(getProducts);

  const filteredProducts = products.filter((p) =>
    includesRow(searchQuery, [p.name])
  );

  return (
    <Grid container columnSpacing={2} rowSpacing={4}>
      {filteredProducts.map((p) => (
        <Grid key={p.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
});
