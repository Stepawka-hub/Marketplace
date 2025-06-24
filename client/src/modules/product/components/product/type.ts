import { TProductActions } from "@types";

export type ProductProps = Omit<
  TProductActions,
  "isInCart" | "isInFavorites"
> & {
  id: string;
  isInCart: boolean;
  isInFavorites: boolean;
};
