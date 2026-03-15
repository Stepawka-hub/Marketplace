import { FC, memo } from "react";
import { Pagination, ProductListUI } from "@/components/elements";
import { useGetFavoritesProductsQuery } from "@/services/favorites";
import { usePagination } from "@/hooks/usePagination";

export const FavoritesList: FC = memo(() => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetFavoritesProductsQuery({
    page,
    limit,
  });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <ProductListUI products={data?.items ?? []} isLoading={isLoading} />
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
});
