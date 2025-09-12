import { TCartProduct } from "@/shared/types";

export type TCartItemUIProps = {
  product: TCartProduct;
  isSelected: boolean;
  handleCardClick: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSelect: (id: string) => void;
};
