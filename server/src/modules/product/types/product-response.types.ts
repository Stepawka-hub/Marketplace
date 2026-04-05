import { TApiResponse, TApiPaginatedResponse } from '@/common';
import { ProductDetailsDto, ProductListItemDto } from '../dto';

export type TProductCreateResponse = TApiResponse<ProductDetailsDto>;

export type TProductDetailsResponse = TApiResponse<ProductDetailsDto>;

export type TProductListResponse = TApiPaginatedResponse<ProductListItemDto>;

export type TProductByIdsResponse = TApiPaginatedResponse<ProductListItemDto>;
