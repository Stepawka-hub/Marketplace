import { TProductListItem } from "@/shared/types";

export type TProductListUIProps = {
  products: TProductListItem[];
  isLoading: boolean;
  isShowLikeButton?: boolean;
  minCardWidth?: number;
};
