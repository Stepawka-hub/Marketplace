import { FC, memo } from "react";
import { Grid } from "@mui/material";
import { TProductListUIProps } from "./type";
import {
  NotFound,
  ProductCard,
  ProductSkeletonList,
} from "@/components/elements";

export const ProductListUI: FC<TProductListUIProps> = memo(
  ({
    products,
    isLoading,
    isInCart,
    isInFavorites,
    addToCart,
    toggleFavorite,
  }) => {
    if (isLoading) {
      return <ProductSkeletonList />;
    }

    if (!products.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Grid container columnSpacing={2} rowSpacing={4}>
        {products.map((p) => (
          <Grid key={p.id} size={{ xs: 12, sm: 6, lg: 4, xl: 2.4 }}>
            <ProductCard
              product={p}
              isInCart={isInCart(p.id)}
              isInFavorites={isInFavorites(p.id)}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
);
