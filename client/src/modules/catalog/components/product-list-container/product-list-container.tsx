import { ProductList } from "@components/product-list";
import { useProductList } from "@modules/catalog/hooks/useProductList";
import { FC } from "react";
import { ProductListContainerProps } from "./type";

export const ProductListContainer: FC<ProductListContainerProps> = ({
  isInCart,
  isInFavorites,
  addToCart,
  toggleFavorite,
}) => {
  const { products, isLoading } = useProductList();

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
};
