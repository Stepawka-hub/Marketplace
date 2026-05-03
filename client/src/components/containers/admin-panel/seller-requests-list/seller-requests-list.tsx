import { FC } from "react";
import {
  useGetAllSellerRequestsQuery,
  useUpdateSellerRequestStatusMutation,
} from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { Pagination, SellerRequestsListUI } from "@/components/elements";
import { TSellerRequestStatus } from "@/shared/types";

export const SellerRequestsList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();
  const { data, isLoading } = useGetAllSellerRequestsQuery({
    page,
    limit,
  });
  const [updateRequest, { isLoading: isUpdating }] =
    useUpdateSellerRequestStatusMutation();

  const handleUpdateStatus = async (
    id: string,
    status: TSellerRequestStatus,
    rejectionReason?: string,
  ) => {
    try {
      await updateRequest({ id, status, rejectionReason }).unwrap();
    } catch (error) {
      console.error("Failed to update request:", error);
    }
  };

  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <SellerRequestsListUI
        requests={data?.items ?? []}
        isLoading={isLoading}
        isUpdating={isUpdating}
        onUpdateStatus={handleUpdateStatus}
      />
      {data && !!data.items.length && (
        <Pagination
          count={data.meta.totalPages}
          page={pagination.page}
          showFirstButton
          showLastButton
          size="large"
          onChange={handlePageChange}
        />
      )}
    </>
  );
};
