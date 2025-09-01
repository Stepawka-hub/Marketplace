import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "@/store";
import {
  getCartItems,
  getSelectedIds,
  removeFromCart,
  toggleSelectedProduct,
} from "@/store/slices/cart";
import { isInArray } from "@/shared/helpers";
import { CartListHeader } from "@/components/containers";
import { CartItemUI } from "@/components/elements";
import { gridStyle } from "./styles";
import { ROUTES } from "@/config/routes";

export const CartList: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedIds);
  const cartItems = useSelector(getCartItems);

  const handleDelete = (id: string) => {
    dispatch(removeFromCart(id));
  };

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
