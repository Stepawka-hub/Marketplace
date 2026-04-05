import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { usePagination } from "@/hooks/usePagination";
import {
  useGetCartItemsQuery,
  useRemoveFromCartMutation,
  useToggleSelectedProductMutation,
} from "@/services/cart";

import { BidsListUI, Pagination } from "@/components/elements";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";
import { Loader } from '@/components/ui';

export const BidsList: FC = () => {
  const navigate = useNavigate();
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  // Todo: добавить loader
  const { data, isLoading: isGettingCart } = useGetCartItemsQuery({
    page,
    limit,
  });

  const [removeFromCart] = useRemoveFromCartMutation();

  const [selectCartItem] = useToggleSelectedProductMutation();

  if (!data) {
    return;
  }

  if (isGettingCart) {
    return <Loader />;
  }

  const pagination = data.meta || defaultPagination;

  const handleDelete = (id: string) => {
    removeFromCart(id);
  };

  const handleSelect = (id: string, isSelected: boolean) => {
    selectCartItem({ productId: id, isSelected });
  };

  const handleCardClick = (id: string) => {
    navigate(ROUTES.CATALOG_PRODUCT(id));
  };

  return (
    <Grid container sx={gridStyle}>
      <BidsListUI
        items={data.items}
        handleDelete={handleDelete}
        handleCardClick={handleCardClick}
        handleSelect={handleSelect}
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
