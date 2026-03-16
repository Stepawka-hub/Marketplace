export type TApiResponse<T = unknown> = {
  data?: T;
  message?: string;
};

export type TApiPaginatedResponse<T, E = object> = {
  message: string;
  data: {
    items: T[];
    meta: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
      hasNext: boolean;
      hasPrevious: boolean;
    };
  } & E;
};
