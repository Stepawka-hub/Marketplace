export type TServerResponse<T = unknown> = {
  data: T;
  message?: string;
  statusCode: number;
  timestamp: string;
}