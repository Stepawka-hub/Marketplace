import { FC } from "react";
import { checkInRange, includesRow } from "@/shared/helpers";
import { useSelector } from "@/store";
import {
  getFilters,
  getIsLoadingProducts,
  getProducts,
  getSearchQuery,
} from "@/store/slices/catalog";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductListUI } from "@/components/elements";

export const ProductList: FC = () => {
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  const products = useSelector(getProducts);
  const isLoading = useSelector(getIsLoadingProducts);
  const searchQuery = useSelector(getSearchQuery);
  const { category, price } = useSelector(getFilters);

  const filteredProducts = products.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      checkInRange(p.price, price.max, price.min) &&
      includesRow(searchQuery, [p.name])
  );

  return (
    <ProductListUI
      products={filteredProducts}
      isLoading={isLoading}
      isInCart={isInCart}
      isInFavorites={isInFavorites}
      addToCart={addToCart}
      toggleFavorite={toggleFavorite}
    />
  );
};
