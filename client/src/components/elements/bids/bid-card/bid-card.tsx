import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formattedWithSpace } from "@/shared/helpers";
import { CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Card } from "@/components/ui";
import {
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  gridContainerStyle,
  priceStyle,
  titleStyle,
} from "./styles";
import { TBidCardProps } from "./type";

export const BidCard: FC<TBidCardProps> = ({ bid, handleCardClick }) => {
  const { i18n } = useTranslation();
  const { id, name, price, preview } = bid.product;
  const formattedPrice = formattedWithSpace(price, i18n.language);

  const onCardClick = () => {
    handleCardClick(id);
  };

  return (
    <Card variant="outlined" sx={cardStyle} onClick={onCardClick}>
      <CardMedia title={name} image={preview} sx={cardMediaStyle} />
      <CardContent sx={cardContentStyle}>
        <Grid sx={gridContainerStyle}>
          <Typography variant="h4" sx={titleStyle}>
            {name}
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={priceStyle}>{formattedPrice} ₽</Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
