import {
  getProducts,
  getSelectedIds,
  removeProduct,
  toggleSelectedProduct,
} from "@modules/cart/services/slices/cart";
import { Grid } from "@mui/material";
import { isInArray } from "@shared/helpers/array-helper";
import { useDispatch, useSelector } from "@store/types";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../cart-item";
import { CartListHeader } from "../cart-list-header";

export const CartList: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedIds);
  const products = useSelector(getProducts);

  const handleDelete = (id: string) => {
    dispatch(removeProduct(id));
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
        totalProducts={products.length}
        totalSelected={selectedIds.length}
      />
      <Grid container spacing={2} flexDirection="column">
        {products.map((p, i) => (
          <CartItem
            key={i}
            id={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
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
