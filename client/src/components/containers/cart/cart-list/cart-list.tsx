import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "@/store";
import {
  getCartItems,
  getSelectedIds,
  toggleSelectedProduct,
} from "@/store/slices/cart";
import { ROUTES } from "@/config/routes";
import { isInArray } from "@/shared/helpers";

import { CartListHeader } from "@/components/containers";
import { CartItemUI } from "@/components/elements";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";

export const CartList: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedIds);
  const cartItems = useSelector(getCartItems);

  const handleDelete = (id: string) => {};

  const handleSelect = (id: string) => {
    dispatch(toggleSelectedProduct(id));
  };

  const handleCardClick = (id: string) => {
    navigate(ROUTES.CATALOG_PRODUCT(id));
  };

  return (
    <Grid container sx={gridStyle}>
      <CartListHeader
        totalProducts={cartItems.length}
        totalSelected={selectedIds.length}
      />
      <Grid container sx={gridStyle}>
        {cartItems.map((p) => (
          <CartItemUI
            key={p.id}
            product={p}
            isSelected={isInArray(selectedIds, p.id)}
            handleCardClick={handleCardClick}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </Grid>
    </Grid>
  );
};
