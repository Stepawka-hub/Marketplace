import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  cardActionsStyle,
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  checkboxStyle,
  gridContainerStyle,
  priceStyle,
  titleStyle,
} from "./styles";
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
import DeleteIcon from "@mui/icons-material/Delete";
import { TCartItemUIProps } from "./type";
import { Card } from "@/components/ui";
import { formattedWithSpace } from "@/shared/helpers";

export const CartItemUI: FC<TCartItemUIProps> = ({
  product,
  isSelected,
  handleCardClick,
  handleDelete,
  handleSelect,
}) => {
  const { t, i18n } = useTranslation();
  const { id, name, price, image } = product;
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
    <Card variant="outlined" sx={cardStyle} onClick={onCardClick}>
      <CardMedia title={name} image={image} sx={cardMediaStyle} />
      <CardContent sx={cardContentStyle}>
        <Grid sx={gridContainerStyle}>
          <Typography variant="h4" sx={titleStyle}>
            {name}
          </Typography>
          <CardActions sx={cardActionsStyle} disableSpacing>
            <Tooltip title={t("cart.item.choose")}>
              <Checkbox
                checked={isSelected}
                sx={checkboxStyle}
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
          <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
