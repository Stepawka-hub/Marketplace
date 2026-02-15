import { FC } from "react";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetProductByIdQuery } from "@/services";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import { NotFound, ProductDetailsUI } from "@/components/elements";

export const ProductDetails: FC = () => {
  const { productId } = useParams<"productId">();
  const { data: product } = useGetProductByIdQuery(productId ?? skipToken);

  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();

  if (!product || !productId) return <NotFound />;

  const addProductToCart = () => addToCart(product);
  const toggleProductInFavorites = () => toggleFavorite(product);

  return (
    <ProductDetailsUI
      product={product}
      isInCart={isInCart(productId)}
      isInFavorites={isInFavorites(productId)}
      addToCart={addProductToCart}
      toggleFavorite={toggleProductInFavorites}
    />
  );
};
