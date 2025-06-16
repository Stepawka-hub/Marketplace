import { TCartProduct, TProductData } from "@types";

export const productToCartItem = (product: TProductData): TCartProduct => {
  const image = "image" in product ? product.image : product.images[0];

  return {
    id: product.id,
    name: product.name,
    image: image,
    price: product.price,
  };
};