import { FC } from "react";
import { includesRow } from "@/shared/helpers";
import { useSelector } from "@/store";
import { getFilters, getSearchQuery } from "@/store/slices/catalog";
import { Pagination, ProductListUI } from "@/components/elements";
import { useGetAllProductsQuery } from "@/services";
import { usePagination } from "@/hooks/usePagination";

export const ProductList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetAllProductsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  const searchQuery = useSelector(getSearchQuery);
  const { category } = useSelector(getFilters);

  const filteredProducts =
    data?.items.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        includesRow(searchQuery, [p.name]),
    ) ?? [];

  return (
    <>
      <ProductListUI isLoading={isLoading} products={filteredProducts} />
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
