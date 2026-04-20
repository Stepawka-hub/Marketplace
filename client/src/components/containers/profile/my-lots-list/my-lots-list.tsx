import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useGetMyLotsQuery } from "@/services/lot";
import { usePagination } from "@/hooks/usePagination";
import { LotsListUI, Pagination } from "@/components/elements";
import { Typography } from "@mui/material";
import { titleStyle } from "./styles";

export const MyLotsList: FC = () => {
  const { t } = useTranslation();
  const { page, limit, defaultPagination, handlePageChange } = usePagination({
    limit: 8,
  });

  const { data, isLoading } = useGetMyLotsQuery({ page, limit });
  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <Typography variant="h2" sx={titleStyle}>
        {t("profile.my-lots.title")}
      </Typography>
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
