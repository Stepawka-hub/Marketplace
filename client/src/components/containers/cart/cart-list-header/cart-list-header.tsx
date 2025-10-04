import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { clearSelected, selectAllCartItems } from "@/store/slices/cart";
import { CartListHeaderProps } from "./type";
import { SelectionActionsBar } from "@/components/elements";

export const CartListHeader: FC<CartListHeaderProps> = ({
  totalProducts,
  totalSelected,
}) => {
  const dispatch = useDispatch();
  const isAllSelected = totalProducts === totalSelected;

  const handleSelectAll = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllCartItems(evt.target.checked));
  };

  const handleDeleteAll = () => {
    dispatch(clearSelected());
  };

  return (
    <SelectionActionsBar
      totalSelected={totalSelected}
      isAllSelected={isAllSelected}
      onSelectAll={handleSelectAll}
      onDeleteAll={handleDeleteAll}
    />
  );
};
