import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { FavoritesListProps } from "./types";
import { getFavoriteItems, getIsLoading } from "@/store/slices/favorites";

export const FavoritesList: FC<FavoritesListProps> = memo(
  ({ isInCart, isInFavorites, addToCart, toggleFavorite }) => {
    const products = useSelector(getFavoriteItems);
    const isLoading = useSelector(getIsLoading);

    return (
      <ProductList
        products={products}
        isLoading={isLoading}
        isInCart={isInCart}
        isInFavorites={isInFavorites}
        addToCart={addToCart}
        toggleFavorite={toggleFavorite}
      />
    );
  }
);
