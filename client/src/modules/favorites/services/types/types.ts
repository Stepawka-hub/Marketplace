import { TProduct } from '@types'

export type TFavoritesState = {
  favoriteItems: TProduct[];
  isLoading: boolean;
}