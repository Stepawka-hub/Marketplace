import { TApiResponse, TApiPaginatedResponse } from '@/common';
import { ProductListItemDto } from '@/modules/product/dto';
import { TFavoritesActionData } from './favorites.types';

export type TFavoritesPaginatedResponse =
  TApiPaginatedResponse<ProductListItemDto>;

export type TFavoritesActionResponse = TApiResponse<TFavoritesActionData>;

export type TFavoritesCountResponse = TApiResponse<number>;

export type TFavoritesIdsResponse = TApiResponse<string[]>;
