import { FC } from "react";
import { useGetSummaryQuery } from "@/services/stats";
import { DashboardUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const Dashboard: FC = () => {
  const { data: summary, isLoading } = useGetSummaryQuery();

  if (isLoading) {
    return <Loader />;
  }

  const stats = {
    users: summary?.users || 0,
    activeLots: summary?.activeLots || 0,
    pendingRequests: summary?.pendingRequests || 0,
  };

  return <DashboardUI stats={stats} />;
};
