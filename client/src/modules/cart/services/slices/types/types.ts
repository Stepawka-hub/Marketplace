import { TProduct } from '@types';

export type TCartState = {
  products: TProduct[];
  selectedIds: string[];
  isLoadingProducts: boolean;
}