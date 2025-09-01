import { TProduct, TProductActions } from "@/shared/types";

export type TProductListUIProps = TProductActions & {
  products: TProduct[];
  isLoading: boolean;
};
