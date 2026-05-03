import { REGISTRATION_PERIOD } from "@/shared/constants";

export type TStatsSummary = {
  users: number;
  activeLots: number;
  pendingRequests: number;
};

export type TRegistrationsItem = {
  date: string;
  count: number;
};

export type TRegistrationPeriod =
  (typeof REGISTRATION_PERIOD)[keyof typeof REGISTRATION_PERIOD];

export type TLotsDistributionData = {
  active: number;
  completed: number;
  expired: number;
};
