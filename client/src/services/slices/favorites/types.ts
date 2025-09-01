import { TProduct } from '@/shared/types';

export type TFavoritesState = {
  favoriteItems: TProduct[];
  isLoading: boolean;
}