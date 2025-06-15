import { TCartProduct } from '@types';

export type CartItemProps = {
  product: TCartProduct;
  isSelected: boolean;
  handleCardClick: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSelect: (id: string) => void;
}