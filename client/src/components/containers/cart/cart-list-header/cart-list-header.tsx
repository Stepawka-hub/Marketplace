import {
  clearSelected,
  selectAllCartItems,
} from "@modules/cart/services/slices/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeBtnStyles, selectAllContainerStyles } from "./styles";
import { CartListHeaderProps } from "./type";

export const CartListHeader: FC<CartListHeaderProps> = ({
  totalProducts,
  totalSelected,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAllSelected = totalProducts === totalSelected;

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllCartItems(event.target.checked));
  };

  const handleDeleteAll = () => {
    dispatch(clearSelected());
  };

  return (
    <Paper sx={selectAllContainerStyles} variant="outlined">
      <Grid
        container
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <FormControlLabel
          label={t("cart.select-all")}
          control={
            <Checkbox
              checked={isAllSelected}
              indeterminate={totalSelected > 0 && !isAllSelected}
              onChange={handleSelectAll}
            />
          }
        />
        <Button
          sx={removeBtnStyles}
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteAll}
        >
          {t("cart.remove-all")}
        </Button>
      </Grid>
    </Paper>
  );
};
