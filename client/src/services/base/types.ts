export type TServerResponse<T = unknown> = {
  data: T;
  message?: string;
  statusCode: number;
  timestamp: string;
}

export type TPaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export type TPaginatedData<T> = {
  items: T[];
  meta: TPaginationMeta;
}

export type TPaginatedResponse<T> = TServerResponse<TPaginatedData<T>>;

export type TPaginationParams = {
  page?: number;
  limit?: number;
};