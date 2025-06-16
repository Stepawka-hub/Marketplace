import { ProductList } from "@components/product-list";
import { getFavoriteItems, getIsLoading } from "@modules/favorites";
import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { FavoritesListProps } from "./types";

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
