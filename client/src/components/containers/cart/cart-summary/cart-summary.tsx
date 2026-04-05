import { FC } from "react";
import {
  useGetSelectedCountQuery,
  useGetTotalPriceQuery,
} from "@/services/cart";
import { CartSummaryUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const CartSummary: FC = () => {
  const { data: totalSelectedCount = 0, isLoading: isGettingSelectedCount } =
    useGetSelectedCountQuery();
  const { data: totalPrice = 0, isLoading: isGettingTotalPrice } =
    useGetTotalPriceQuery();

  const handleCheckout = () => {
    // Todo: checkout
  };

  if (isGettingSelectedCount || isGettingTotalPrice) {
    return <Loader />;
  }

  return (
    <CartSummaryUI
      totalCount={totalSelectedCount}
      totalPrice={totalPrice}
      onCheckout={handleCheckout}
    />
  );
};
