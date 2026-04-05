import { TCartItem } from "@/shared/types";

export type TCartItemUIProps = {
  cartItem: TCartItem;
  handleCardClick: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSelect: (id: string, isSelected: boolean) => void;
};
