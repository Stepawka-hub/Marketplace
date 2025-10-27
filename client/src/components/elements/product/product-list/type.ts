import { TProductOld, TProductActions } from "@/shared/types";

export type TProductListUIProps = TProductActions & {
  products: TProductOld[];
  isLoading: boolean;
};
