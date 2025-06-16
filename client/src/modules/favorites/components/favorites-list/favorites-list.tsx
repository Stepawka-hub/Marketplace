import { NotFound } from "@components/not-found";
import { Grid } from "@mui/material";
import { FC, memo } from "react";
import { FavoritesListProps } from "./types";
import { useSelector } from "react-redux";
import { getFavoriteItems, getIsLoading } from "@modules/favorites";
import { ProductCard } from "@components/product-card";

export const FavoritesList: FC<FavoritesListProps> = memo(
  ({ isInCart, isInFavorites, addToCart, toggleFavorite }) => {
    const products = useSelector(getFavoriteItems);
    const isLoadingProducts = useSelector(getIsLoading);

    if (isLoadingProducts) {
      return <SkeletonList />;
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
