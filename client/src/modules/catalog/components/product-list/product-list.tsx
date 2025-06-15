import { NotFound } from "@components/not-found";
import {
  getFilters,
  getIsLoadingProducts,
  getProducts,
  getSearchQuery,
} from "@modules/catalog/services/slices/catalog";
import { Grid } from "@mui/material";
import { checkInRange, includesRow } from "@shared/helpers/filter";
import { useSelector } from "@store/types";
import { FC, memo } from "react";
import { ProductCard } from "../product-card";
import { SkeletonList } from "../skeleton-list";
import { ProductListProps } from "./type";

export const ProductList: FC<ProductListProps> = memo(
  ({ isInCart, addToCart }) => {
    const products = useSelector(getProducts);
    const isLoadingProducts = useSelector(getIsLoadingProducts);
    const searchQuery = useSelector(getSearchQuery);
    const { category, price } = useSelector(getFilters);

    if (isLoadingProducts) {
      return <SkeletonList />;
    }

    const filteredProducts = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        checkInRange(p.price, price.max, price.min) &&
        includesRow(searchQuery, [p.name])
    );

    if (!filteredProducts.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Grid container columnSpacing={2} rowSpacing={4}>
        {filteredProducts.map((p) => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, lg: 4, xl: 2.4 }}>
            <ProductCard
              product={p}
              isInCart={isInCart(p.id)}
              addToCart={addToCart}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
);
