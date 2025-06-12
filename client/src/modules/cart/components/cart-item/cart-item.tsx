import testImg from "@images/testImg.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { Card } from "@ui/card";
import { FC, MouseEvent } from "react";
import { CartItemProps } from "./type";
import { useTranslation } from "react-i18next";
import { cardMediaStyles, cardStyles } from "./styles";
import { t } from "i18next";

export const CartItem: FC<CartItemProps> = ({
  id,
  image,
  name,
  price,
  isSelected,
  handleCardClick,
  handleDelete,
  handleSelect,
}) => {
  const { i18n } = useTranslation();
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const onDelete = (e: MouseEvent) => {
    e.stopPropagation();
    handleDelete(id);
  };

  const onSelect = (e: MouseEvent) => {
    e.stopPropagation();
    handleSelect(id);
  };

  const onCardClick = () => {
    handleCardClick(id);
  };

  return (
    <Card sx={cardStyles} variant="outlined" onClick={onCardClick}>
      <CardMedia sx={cardMediaStyles} image={testImg} title={name} />
      <CardContent sx={{ flexGrow: 1, px: 0, ml: 2 }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "1rem", sm: "1.15rem" } }}
          >
            {name}
          </Typography>
          <CardActions
            sx={{
              flexDirection: { xs: "column-reverse", sm: "row" },
            }}
            disableSpacing
          >
            <Tooltip title={t("cart.item.choose")}>
              <Checkbox
                sx={{ mr: { sm: 1 } }}
                checked={isSelected}
                onClick={onSelect}
              />
            </Tooltip>
            <Tooltip title={t("cart.item.remove-btn")}>
              <IconButton onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Grid>
        <Grid>
          <Typography fontWeight="600">{formattedPrice} ₽</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
