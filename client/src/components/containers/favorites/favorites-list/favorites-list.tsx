import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { getFavoriteItems, getIsLoading } from "@/store/slices/favorites";
import { ProductListUI } from "@/components/elements";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";

export const FavoritesList: FC = memo(() => {
  const products = useSelector(getFavoriteItems);
  const isLoading = useSelector(getIsLoading);
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  return (
    <ProductListUI
      products={products}
      isLoading={isLoading}
      isInCart={isInCart}
      isInFavorites={isInFavorites}
      addToCart={addToCart}
      toggleFavorite={toggleFavorite}
    />
  );
});
