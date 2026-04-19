import { FC } from "react";
import { usePagination } from "@/hooks/usePagination";
import { useGetLotBidsQuery } from "@/services/bid";

import { BidsListUI, NotFound, Pagination } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";
import { TBidsListProps } from "./type";

export const BidsList: FC<TBidsListProps> = ({ lotId }) => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();
  const { data, isLoading } = useGetLotBidsQuery({
    lotId,
    params: { page, limit },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFound />;
  }

  const pagination = data.meta || defaultPagination;

  return (
    <Grid container sx={gridStyle}>
      <BidsListUI items={data.items} />
      <Pagination
        count={pagination.totalPages}
        page={pagination.page}
        showFirstButton
        showLastButton
        size="large"
        onChange={handlePageChange}
      />
    </Grid>
  );
};
