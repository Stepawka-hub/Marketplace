import { FC } from "react";
import {
  useGetAllSellerRequestsQuery,
  useUpdateSellerRequestMutation,
} from "@/services/admin";
import { SellerRequestsListUI } from "@/components/elements";
import { TSellerRequestStatus } from "@/shared/types";

export const SellerRequestsList: FC = () => {
  const { data: requests = [], isLoading } = useGetAllSellerRequestsQuery();
  const [updateRequest, { isLoading: isUpdating }] =
    useUpdateSellerRequestMutation();

  const handleUpdateStatus = async (
    id: string,
    status: TSellerRequestStatus,
  ) => {
    try {
      await updateRequest({ id, status }).unwrap();
    } catch (error) {
      console.error("Failed to update request:", error);
    }
  };

  return (
    <SellerRequestsListUI
      requests={requests}
      isLoading={isLoading}
      isUpdating={isUpdating}
      onUpdateStatus={handleUpdateStatus}
    />
  );
};
