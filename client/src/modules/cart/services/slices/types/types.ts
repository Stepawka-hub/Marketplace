import { TProduct } from '@types';

export type TCartState = {
  products: TProduct[];
  isLoadingProducts: boolean;
  totalCount: number;
  totalPrice: number;
}