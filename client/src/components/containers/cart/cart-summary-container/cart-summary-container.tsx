import { FC } from "react";

export const CartSummaryContainer: FC = () => {
  const totalCount = useSelector(getSelectedItemsCount);
  const totalPrice = useSelector(getTotalPrice);
  const formattedPrice = formattedWithSpace(totalPrice, i18n.language);
};
