import { FC } from "react";
import { usePagination } from "@/hooks/usePagination";
import { useGetMyBidsHistoryQuery } from "@/services";
import { BidLotsListUI } from "@/components/elements";
import { Pagination } from "@mui/material";

export const BidHistoryLotsList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetMyBidsHistoryQuery({ page, limit });
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
