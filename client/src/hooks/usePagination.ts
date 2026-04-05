import { ChangeEvent, useState } from "react";

export const usePagination = ({ defaultPage = 1, limit = 10 } = {}) => {
  const [page, setPage] = useState(defaultPage);

  const defaultPagination = {
    page: defaultPage,
    totalPages: 1,
    hasNext: false,
    hasPrevious: false,
    total: 0,
    limit: limit,
  };

  const handlePageChange = (_event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return {
    page,
    limit,
    defaultPagination,
    handlePageChange,
  };
};
