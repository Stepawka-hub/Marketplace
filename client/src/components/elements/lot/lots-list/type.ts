import { TLotListItem } from "@/shared/types";

export type TLotsListUIProps = {
  lots: TLotListItem[];
  isLoading: boolean;
  isShowLikeButton?: boolean;
  minCardWidth?: number;
};
