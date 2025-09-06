import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Box, Grid, List, Paper, Typography } from "@mui/material";
import {
  listStyle,
  mainContainerStyle,
  productDetailsStyle,
  titleStyle,
  wrapperStyle,
} from "./styles";
import { ProductMetaProps } from "./type";
import { RatingScore, AttributeItem } from "@/components/elements";

export const ProductMeta: FC<ProductMetaProps> = ({
  rating,
  numberReviews,
  seller,
  attributes,
}) => {
  const { t } = useTranslation();

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={mainContainerStyle}>
        <Box>
          <Typography variant="h3" sx={titleStyle}>
            {t("product.rating.label")}
          </Typography>
          <RatingScore ratingScore={rating} numberReviews={numberReviews} />
        </Box>

        <Box>
          <Typography variant="h3" sx={titleStyle}>
            {t("product.seller.label")}
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Avatar>{seller[0]}</Avatar>
            <Typography>{seller}</Typography>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h3" sx={productDetailsStyle}>
            {t("product.details.label")}
          </Typography>

          <List sx={listStyle}>
            {attributes.map((attr, index) => (
              <AttributeItem
                key={index}
                name={attr.name}
                value={attr.value}
                showDivider={index + 1 !== attributes.length}
              />
            ))}
          </List>
        </Box>
      </Box>
    </Paper>
  );
};
