import { ChangeEvent, FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { clearSelected, selectAllCartItems } from "@/store/slices/cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import {
  gridContainerStyle,
  removeBtnStyles,
  selectAllContainerStyles,
} from "./styles";
import { CartListHeaderProps } from "./type";

export const CartListHeader: FC<CartListHeaderProps> = ({
  totalProducts,
  totalSelected,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAllSelected = totalProducts === totalSelected;

  const handleSelectAll = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllCartItems(evt.target.checked));
  };

  const handleDeleteAll = () => {
    dispatch(clearSelected());
  };

  return (
    <Paper sx={selectAllContainerStyles} variant="outlined">
      <Grid container sx={gridContainerStyle}>
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
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={removeBtnStyles}
          onClick={handleDeleteAll}
        >
          {t("cart.remove-all")}
        </Button>
      </Grid>
    </Paper>
  );
};
