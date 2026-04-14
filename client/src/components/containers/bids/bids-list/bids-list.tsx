import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { usePagination } from "@/hooks/usePagination";

import { BidsListUI, Pagination } from "@/components/elements";
import { Loader } from '@/components/ui';
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";

export const BidsList: FC = () => {
  return null;
  const navigate = useNavigate();
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  
  if (!data) {
    return;
  }

  if (isLoading) {
    return <Loader />;
  }

  const pagination = data.meta || defaultPagination;

  const handleDelete = (id: string) => {
  };

  const handleCardClick = (id: string) => {
    navigate(ROUTES.CATALOG_LOT(id));
  };

  return (
    <Grid container sx={gridStyle}>
      <BidsListUI
        items={data.items}
        handleDelete={handleDelete}
        handleCardClick={handleCardClick}
      />
      <Pagination
        count={data.meta.totalPages}
        page={pagination.page}
        showFirstButton
        showLastButton
        size="large"
        onChange={handlePageChange}
      />
    </Grid>
  );
};
