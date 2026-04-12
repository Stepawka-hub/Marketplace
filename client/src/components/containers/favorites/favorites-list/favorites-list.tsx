import { FC, memo } from "react";
import { useGetFavoritesLotsQuery } from "@/services/favorites";
import { usePagination } from "@/hooks/usePagination";
import { LotsListUI, Pagination } from "@/components/elements";

export const FavoritesList: FC = memo(() => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  const { data, isLoading } = useGetFavoritesLotsQuery({
    page,
    limit,
  });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <LotsListUI lots={data?.items ?? []} isLoading={isLoading} />
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
