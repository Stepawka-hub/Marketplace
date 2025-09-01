import { FC } from "react";
import { CartSummary } from "@/components/elements";
import { useTranslation } from "react-i18next";
import { useSelector } from "@/store";
import { getSelectedItemsCount } from "@/store/slices/cart";
import { getTotalPrice } from "@/store/selectors/cart";
import { formattedWithSpace } from "@/shared/helpers";

export const CartSummaryContainer: FC = () => {
  const { t, i18n } = useTranslation();
  const totalCount = useSelector(getSelectedItemsCount);
  const totalPrice = useSelector(getTotalPrice);
  const formattedPrice = formattedWithSpace(totalPrice, i18n.language);

  const handleCheckout = () => {
    // Todo: checkout
  };

  return (
    <CartSummary
      totalPrice={formattedPrice}
      labels={{
        information: t("cart.summary.information"),
        products: t("cart.summary.products", { count: totalCount }),
        checkout: t("cart.summary.checkout"),
      }}
      onCheckout={handleCheckout}
    />
  );
};
