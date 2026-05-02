import { FC } from "react";
import {
  useGetLotsDistributionQuery,
  useGetRegistrationsQuery,
  useGetSummaryQuery,
} from "@/services/stats";
import { DashboardUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const Dashboard: FC = () => {
  const { data: summary, isLoading: summaryLoading } = useGetSummaryQuery();
  const { data: registrations, isLoading: registrationsLoading } =
    useGetRegistrationsQuery(7);
  const { data: distribution, isLoading: distributionLoading } =
    useGetLotsDistributionQuery();

  if (summaryLoading || registrationsLoading || distributionLoading) {
    return <Loader />;
  }

  const stats = {
    users: summary?.users || 0,
    activeLots: summary?.activeLots || 0,
    pendingRequests: summary?.pendingRequests || 0,
  };

  const defaultDistribution = {
    active: 0,
    completed: 0,
    expired: 0,
  };

  return (
    <DashboardUI
      stats={stats}
      registrations={registrations || []}
      distribution={distribution || defaultDistribution}
    />
  );
};
