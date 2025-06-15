import { TCartProduct, TProduct } from "@types";

export const productToCartItem = (product: TProduct): TCartProduct => ({
  id: product.id,
  name: product.name,
  image: product.image,
  price: product.price,
});
