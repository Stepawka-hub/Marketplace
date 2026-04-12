import { FC } from "react";
import { useGetMyLotsQuery } from "@/services/lot";
import { usePagination } from "@/hooks/usePagination";
import { LotsListUI } from "@/components/elements";
import { Pagination } from "@mui/material";

export const MyLotsList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetMyLotsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <LotsListUI isLoading={isLoading} lots={data?.items ?? []} />
      {data && (
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
