import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { usePagination } from "@/hooks/usePagination";
import {
  useGetCartQuery,
  useRemoveFromCartMutation,
  useToggleSelectedProductMutation,
} from "@/services/cart";

import { CartListHeader } from "@/components/containers";
import { CartListUI, Pagination } from "@/components/elements";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";

export const CartList: FC = () => {
  const navigate = useNavigate();
  const { page, limit, defaultPagination, handlePageChange } = usePagination();

  // Todo: добавить loader
  const { data, isLoading: isGettingCart } = useGetCartQuery({ page, limit });

  const [removeFromCart, { isLoading: isRemoving }] =
    useRemoveFromCartMutation();

  const [selectCartItem, { isLoading: isSelecting }] =
    useToggleSelectedProductMutation();

  if (!data) return;

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
      <CartListHeader />
      <CartListUI
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
