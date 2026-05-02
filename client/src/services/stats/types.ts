export type TStatsSummary = {
  users: number;
  activeLots: number;
  pendingRequests: number;
};

export type TRegistrationsItem = {
  date: string;
  count: number;
};

export type TRegistrationsResponse = TRegistrationsItem[];

export type TLotsDistributionResponse = {
  active: number;
  completed: number;
  expired: number;
};
