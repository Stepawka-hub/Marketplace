import { TProduct } from '@types'

export type ProductListProps = {
  isInCart: (pId: string) => boolean;
  addToCart: (p: TProduct) => void;
}