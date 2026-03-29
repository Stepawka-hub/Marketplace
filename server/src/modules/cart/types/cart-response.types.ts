import { TApiPaginatedResponse, TApiResponse } from '@/common';
import { CartItemDto } from '../dto';
import { TCartActionData, TCartExtraData } from './cart.types';

export type TCartPaginatedResponse = TApiPaginatedResponse<
  CartItemDto,
  TCartExtraData
>;

export type TCartActionResponse = TApiResponse<TCartActionData>;

export type TCartGetCountResponse = TApiResponse<number>;

export type TCartGetTotalItemsResponse = TApiResponse<number>;

export type TCartItemsIdsResponse = TApiResponse<string[]>;

export type TCartTotalPriceResponse = TApiResponse<number>;
