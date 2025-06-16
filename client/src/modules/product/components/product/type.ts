import { TProductActions } from "@types";

export type ProductProps = TProductActions & {
  id: string;
  isInCart: boolean;
  isInFavorites: boolean;
};
