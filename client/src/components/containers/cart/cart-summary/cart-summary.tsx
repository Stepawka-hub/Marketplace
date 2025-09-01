import { FC } from "react";
import { CartSummaryUI } from "@/components/elements";
import { useSelector } from "@/store";
import { getSelectedItemsCount } from "@/store/slices/cart";
import { getTotalPrice } from "@/store/selectors/cart";

export const CartSummary: FC = () => {
  const totalCount = useSelector(getSelectedItemsCount);
  const totalPrice = useSelector(getTotalPrice);

  const handleCheckout = () => {
    // Todo: checkout
  };

  return (
    <CartSummaryUI
      totalCount={totalCount}
      totalPrice={totalPrice}
      onCheckout={handleCheckout}
    />
  );
};
