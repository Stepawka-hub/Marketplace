import { TProduct, TProductActions } from "@types";

export type ProductListProps = TProductActions & {
  products: TProduct[];
  isLoading: boolean;
};
