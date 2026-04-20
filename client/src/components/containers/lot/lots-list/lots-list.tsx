import { FC } from "react";
import { useSelector } from "@/store";
import { getFilters, getSearchQuery } from "@/store/slices/catalog";
import { useGetAllLotsQuery } from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { LotsListUI, Pagination } from "@/components/elements";

export const LotsList: FC = () => {
  const searchQuery = useSelector(getSearchQuery);
  const filters = useSelector(getFilters);

  const { page, limit, defaultPagination, handlePageChange } = usePagination();
  const { data, isLoading } = useGetAllLotsQuery({
    page,
    limit,
    search: searchQuery,
    status: filters.status,
    minPrice: filters.price.min,
    maxPrice: filters.price.max,
  });

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
