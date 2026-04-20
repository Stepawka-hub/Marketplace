import { FC } from "react";
import { useGetAllMyProductsQuery } from "@/services";
import { usePagination } from "@/hooks/usePagination";
import { Pagination, ProductListUI } from "@/components/elements";

export const MyProductList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination({
    limit: 8,
  });

  const { data, isLoading } = useGetAllMyProductsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <ProductListUI isLoading={isLoading} products={data?.items ?? []} />
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
