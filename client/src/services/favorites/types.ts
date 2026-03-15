import { TProductListItem } from '@/shared/types';
import { TPaginatedResponse } from '../base';

export type TFavoritesResponse = TPaginatedResponse<TProductListItem>['data'];