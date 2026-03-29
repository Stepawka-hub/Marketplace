import { FC } from "react";
import {
  useClearCartMutation,
  useGetCartCountQuery,
  useGetSelectedCountQuery,
  useSelectAllCartItemsMutation,
} from "@/services/cart";
import { SelectionActionsBar } from "@/components/elements";
import { Loader } from "@/components/ui";

export const CartListHeader: FC = () => {
  const { data: totalCount = 0, isLoading: isGettingCartCount } =
    useGetCartCountQuery();

  const { data: selectedCount = 0, isLoading: isGettingSelectedCount } =
    useGetSelectedCountQuery();

  const [selectAllCartItems, { isLoading: isSelectAllLoading }] =
    useSelectAllCartItemsMutation();

  const [clearCart, { isLoading: isClearCartLoading }] = useClearCartMutation();

  const isAllSelected = totalCount === selectedCount;

  const handleSelectAll = () => {
    selectAllCartItems({ isSelected: !isAllSelected });
  };

  const handleDeleteAll = () => {
    clearCart();
  };

  if (isGettingCartCount || isGettingSelectedCount) {
    return <Loader />;
  }

  return (
    <SelectionActionsBar
      totalSelected={selectedCount}
      isAllSelected={isAllSelected}
      disabled={isSelectAllLoading || isClearCartLoading}
      onSelectAll={handleSelectAll}
      onDeleteAll={handleDeleteAll}
    />
  );
};
