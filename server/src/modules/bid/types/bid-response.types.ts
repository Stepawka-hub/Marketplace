import { TApiPaginatedResponse, TApiResponse } from '@/common';
import { BidActionDataDto, BidDetailsDto } from '../dto';

export type TBidPaginatedResponse = TApiPaginatedResponse<BidDetailsDto>;

export type TBidActionResponse = TApiResponse<BidActionDataDto>;
