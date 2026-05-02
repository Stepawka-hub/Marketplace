import {
  TLotsDistributionData,
  TRegistrationPeriod,
  TRegistrationsItem,
  TStatsSummary,
} from "@/shared/types";

export type TDashboardUIProps = {
  stats: TStatsSummary;
  registrationsChart: {
    data: TRegistrationsItem[];
    currentPeriod: TRegistrationPeriod;
    onPeriodChange: (period: TRegistrationPeriod) => void;
  };
  distribution: TLotsDistributionData;
};
