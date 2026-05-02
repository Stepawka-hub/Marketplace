import { TLotsDistributionResponse, TRegistrationsItem } from '@/services/stats/types';

export type TDashboardUIProps = {
  stats: {
    users: number;
    activeLots: number;
    pendingRequests: number;
  };
  registrations: TRegistrationsItem[];
  distribution: TLotsDistributionResponse;
};
