import { FC } from "react";
import { NotFound, ProductDetailsUI } from "@/components/elements";
import { useParams } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useFavorites } from "@/hooks/useFavorites";
import mockProducts from "@/shared/mock/products.json";

export const ProductDetails: FC = () => {
  const { productId } = useParams<"productId">();

  // Todo: Переписать на корректное получение из стора
  const product = mockProducts.find((p) => p.id === productId);

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
