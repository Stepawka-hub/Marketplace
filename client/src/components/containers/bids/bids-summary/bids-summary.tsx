import { FC } from "react";
import {
  useGetSelectedCountQuery,
  useGetTotalPriceQuery,
} from "@/services/cart";
import { BidsSummaryUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const BidsSummary: FC = () => {
  const { data: totalSelectedCount = 0, isLoading: isGettingSelectedCount } =
    useGetSelectedCountQuery();
  const { data: totalPrice = 0, isLoading: isGettingTotalPrice } =
    useGetTotalPriceQuery();

  if (isGettingSelectedCount || isGettingTotalPrice) {
    return <Loader />;
  }

  return (
    <BidsSummaryUI totalCount={totalSelectedCount} totalPrice={totalPrice} />
  );
};
