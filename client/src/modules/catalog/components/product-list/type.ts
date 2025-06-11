import { TProduct } from '@types'

export type ProductListProps = {
  cartItemsIds: string[];
  addToCart: (p: TProduct) => void;
}