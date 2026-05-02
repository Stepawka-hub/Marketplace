export type TStatsSummary = {
  users: number;
  activeLots: number;
  pendingRequests: number;
};

export type TRegistrationsItem = {
  date: string;
  count: number;
};

export type TLotsDistributionData = {
  active: number;
  completed: number;
  expired: number;
};
