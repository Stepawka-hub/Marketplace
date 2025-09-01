import {
  getCartItems,
  getSelectedIds,
  removeFromCart,
  toggleSelectedProduct,
} from "@modules/cart/services/slices/cart";
import { Grid } from "@mui/material";
import { isInArray } from "@shared/helpers/array-helper";
import { useDispatch, useSelector } from "@store/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../../elements/cart/cart-item";
import { CartListHeader } from "../cart-list-header";

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
    navigate(`/catalog/${id}`);
  };

  return (
    <Grid container spacing={2} flexDirection="column">
      <CartListHeader
        totalProducts={cartItems.length}
        totalSelected={selectedIds.length}
      />
      <Grid container spacing={2} flexDirection="column">
        {cartItems.map((i) => (
          <CartItem
            key={i.id}
            product={i}
            isSelected={isInArray(selectedIds, i.id)}
            handleCardClick={handleCardClick}
            handleDelete={handleDelete}
            handleSelect={handleSelect}
          />
        ))}
      </Grid>
    </Grid>
  );
};
