import { TProductListItem } from "@/shared/types";

export type TProductListUIProps = {
  products: TProductListItem[];
  isLoading: boolean;
  isShowCreateLotButton?: boolean;
  minCardWidth?: number;
};
