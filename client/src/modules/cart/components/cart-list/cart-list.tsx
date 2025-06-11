import { FC } from "react";
import { CartItem } from "../cart-item";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "@store/types";
import {
  getProducts,
  getSelectedIds,
  removeProduct,
  toggleSelectedProduct,
} from "@modules/cart/services/slices/cart";
import { isInArray } from "@shared/helpers/array-helper";
import { useNavigate } from "react-router-dom";

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

  const handleCardClick = (id: string) => navigate(`/catalog/${id}`);

  console.log(selectedIds);

  return (
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
  );
};
