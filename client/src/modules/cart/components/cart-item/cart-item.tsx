import testImg from "@images/testImg.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { Card } from "@ui/card";
import { FC, MouseEvent } from "react";
import { CartItemProps } from "./type";
import { useTranslation } from 'react-i18next';

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
    <Card
      sx={{
        flexDirection: "row",
        height: "auto",
        borderRadius: "0.75rem",
        backgroundColor: "custom.primary",
        "&:hover": {
          transform: "none",
        },
      }}
      variant="outlined"
      onClick={onCardClick}
    >
      <CardMedia
        sx={{ width: "10rem", borderRadius: "1rem" }}
        image={testImg}
        title={name}
      />
      <CardContent sx={{ flexGrow: 1, px: 0, ml: 2 }}>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" fontSize="1.15rem">
            {name}
          </Typography>
          <CardActions>
            <Checkbox checked={isSelected} onClick={onSelect} />
            <IconButton onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Grid>
        <Grid>
          <Typography fontWeight="600">{formattedPrice} ₽</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
