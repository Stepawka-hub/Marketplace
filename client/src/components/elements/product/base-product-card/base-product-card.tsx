import { FC } from "react";
import { Card } from "@/components/ui";
import { CardContent, CardMedia, Typography, Box } from "@mui/material";
import {
  cardMediaButtonStyle,
  cardContentStyle,
  cardMediaStyle,
  cardStyle,
  descTypographyStyle,
  nameTypographyStyle,
  sellerInfoStyle,
} from "./styles";
import { TBaseProductCardProps } from "./type";

export const BaseProductCard: FC<TBaseProductCardProps> = ({
  name,
  shortDescription,
  preview,
  seller,
  actions,
  footer,
  handleClick,
}) => {
  return (
    <Card variant="outlined" sx={cardStyle} onClick={handleClick}>
      <CardMedia title={name} image={preview || ""} sx={cardMediaStyle}>
        {actions && <Box sx={cardMediaButtonStyle}>{actions}</Box>}
      </CardMedia>

      <CardContent sx={cardContentStyle}>
        <Typography variant="h5" sx={nameTypographyStyle}>
          {name}
        </Typography>

        <Typography sx={descTypographyStyle} color="textSecondary">
          {shortDescription}
        </Typography>

        <Typography sx={sellerInfoStyle}>
          {`Продавец: ${seller.firstName} ${seller.lastName}`}
        </Typography>

        {footer}
      </CardContent>
    </Card>
  );
};
