import { TRegistrationPeriod, TRegistrationsItem } from "@/shared/types";

export type TRegistrationsChartProps = {
  data: TRegistrationsItem[];
  currentPeriod: TRegistrationPeriod;
  onPeriodChange: (period: TRegistrationPeriod) => void;
};
