import { FC } from "react";
import { useSelector } from "@/store";
import { getFilters, getSearchQuery } from "@/store/slices/catalog";
import { useGetAllLotsQuery } from "@/services";
import { includesRow } from "@/shared/helpers";
import { usePagination } from "@/hooks/usePagination";
import { LotsListUI, Pagination } from "@/components/elements";

export const LotsList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetAllLotsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  const searchQuery = useSelector(getSearchQuery);
  const { category } = useSelector(getFilters);

  const filteredLots =
    data?.items.filter(
      ({ product }) =>
        (category === "all" || product.category === category) &&
        includesRow(searchQuery, [product.name]),
    ) ?? [];

  return (
    <>
      <LotsListUI isLoading={isLoading} lots={filteredLots} />
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
