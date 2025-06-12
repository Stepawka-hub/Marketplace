import {
  clearSelected,
  getProducts,
  getSelectedIds,
  removeProduct,
  selectAllProducts,
  toggleSelectedProduct,
} from "@modules/cart/services/slices/cart";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
} from "@mui/material";
import { isInArray } from "@shared/helpers/array-helper";
import { useDispatch, useSelector } from "@store/types";
import { ChangeEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../cart-item";
import { useTranslation } from "react-i18next";
import { selectAllContainerStyles } from "./styles";

export const CartList: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedIds);
  const products = useSelector(getProducts);
  const allSelected = products.length === selectedIds.length;

  const handleDelete = (id: string) => {
    dispatch(removeProduct(id));
  };

  const handleSelect = (id: string) => {
    dispatch(toggleSelectedProduct(id));
  };

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllProducts(event.target.checked));
  };

  const handleDeleteAll = () => {
    dispatch(clearSelected());
  };

  const handleCardClick = (id: string) => navigate(`/catalog/${id}`);

  return (
    <Grid container spacing={2} flexDirection="column">
      <Paper sx={selectAllContainerStyles}>
        <FormControlLabel
          label={t("cart.select-all")}
          control={
            <Checkbox
              checked={allSelected}
              indeterminate={selectedIds.length > 0 && !allSelected}
              onChange={handleSelectAll}
            />
          }
        />
        <Button variant="outlined" onClick={handleDeleteAll}>
          {t("cart.remove-all")}
        </Button>
      </Paper>

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
