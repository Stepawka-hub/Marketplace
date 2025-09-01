import { FC } from "react";
import { CartSummary } from "@/components/elements";
import { useSelector } from "@/store";
import { getSelectedItemsCount } from "@/store/slices/cart";
import { getTotalPrice } from "@/store/selectors/cart";

export const CartSummaryContainer: FC = () => {
  const totalCount = useSelector(getSelectedItemsCount);
  const totalPrice = useSelector(getTotalPrice);

  const handleCheckout = () => {
    // Todo: checkout
  };

  return (
    <CartSummary
      totalCount={totalCount}
      totalPrice={totalPrice}
      onCheckout={handleCheckout}
    />
  );
};
