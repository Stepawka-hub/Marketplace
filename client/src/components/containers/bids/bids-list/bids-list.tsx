import { FC } from "react";
import { useTranslation } from "react-i18next";
import { usePagination } from "@/hooks/usePagination";
import { useGetLotBidsQuery } from "@/services/bid";

import { BidsListUI, Pagination } from "@/components/elements";
import { Grid, Typography } from "@mui/material";
import { gridStyle, titleStyle } from "./styles";
import { TBidsListProps } from "./type";

export const BidsList: FC<TBidsListProps> = ({ lotId }) => {
  const { t } = useTranslation();
  const { page, limit, defaultPagination, handlePageChange } = usePagination();
  const { data, isLoading } = useGetLotBidsQuery({
    lotId,
    params: { page, limit },
  });

  const pagination = data?.meta || defaultPagination;

  return (
    <Grid container sx={gridStyle}>
      <Typography sx={titleStyle}>{t("bids.list.title")}</Typography>
      <BidsListUI items={data?.items ?? []} isLoading={isLoading} />
      {data && (
        <Pagination
          count={pagination.totalPages}
          page={pagination.page}
          showFirstButton
          showLastButton
          size="large"
          onChange={handlePageChange}
        />
      )}
    </Grid>
  );
};
