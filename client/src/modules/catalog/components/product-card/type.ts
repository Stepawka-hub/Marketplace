import { TProduct } from "@types";

export type ProductCardProps = {
  product: TProduct;
  isInCart: boolean;
  addToCart: (p: TProduct) => void;
};
