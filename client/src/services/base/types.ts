export type TServerResponse<T = unknown> = {
  data: T;
  message?: string;
  statusCode: number;
  timestamp: string;
};

export type TPaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
};

export type TPaginatedData<T, E = object> = {
  items: T[];
  meta: TPaginationMeta;
} & E;

export type TPaginatedResponse<T, E = object> = TServerResponse<
  TPaginatedData<T, E>
>;

export type TPaginationParams = {
  page?: number;
  limit?: number;
};
