import {
  getFilters,
  getIsLoadingProducts,
  getProducts,
  getSearchQuery,
} from "@modules/catalog/services/slices/catalog";
import { Grid } from "@mui/material";
import { useSelector } from "@store";
import { FC, memo } from "react";
import { ProductCard } from "../product-card";
import { checkInRange, includesRow } from "@shared/helpers/filter";
import { SkeletonCard } from "@ui/skeleton-card";

export const ProductList: FC = memo(() => {
  const products = useSelector(getProducts);
  const isLoadingProducts = useSelector(getIsLoadingProducts);
  const searchQuery = useSelector(getSearchQuery);
  const { category, price } = useSelector(getFilters);

  if (!isLoadingProducts) {
    return (
      <Grid container spacing={2}>
        {[...Array(8)].map((_, index) => (
          <Grid
            key={index}
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ height: "40vh" }}
          >
            <SkeletonCard variant="rounded" />
          </Grid>
        ))}
      </Grid>
    );
  }

  const filteredProducts = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      checkInRange(p.price, price.max, price.min) &&
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
