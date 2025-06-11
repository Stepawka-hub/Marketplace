export type CartItemProps = {
  id: string,
  image: string;
  name: string;
  price: number;
  isSelected: boolean;
  handleCardClick: (id: string) => void;
  handleDelete: (id: string) => void;
  handleSelect: (id: string) => void;
}