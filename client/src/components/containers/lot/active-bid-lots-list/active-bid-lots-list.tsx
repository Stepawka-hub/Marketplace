import { FC } from "react";
import { useGetMyActiveBidsQuery } from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { Pagination, BidLotsListUI } from "@/components/elements";

export const ActiveBidLotsList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetMyActiveBidsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <BidLotsListUI isLoading={isLoading} lots={data?.items ?? []} />
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
