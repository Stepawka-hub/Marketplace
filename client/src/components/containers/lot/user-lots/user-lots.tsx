import { FC } from "react";
import { useGetMyLotsQuery } from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { Pagination, UserLotsUI } from "@/components/elements";

export const UserLots: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetMyLotsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <UserLotsUI isLoading={isLoading} lots={data?.items ?? []} />
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
