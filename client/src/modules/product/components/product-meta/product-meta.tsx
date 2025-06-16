import { Avatar, Box, Grid, List, Paper, Typography } from "@mui/material";
import { AttributeItem } from "@ui/attribute-item";
import { RatingScore } from "@ui/rating-score";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { mainContainerStyles, titleStyles } from "./styles";
import { ProductMetaProps } from "./type";

export const ProductMeta: FC<ProductMetaProps> = ({
  rating,
  numberReviews,
  seller,
  attributes,
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ p: 2, backgroundColor: "custom.primary" }} variant="outlined">
      <Box sx={mainContainerStyles}>
        <Box>
          <Typography variant="h3" sx={titleStyles}>
            {t("product.rating.label")}
          </Typography>
          <RatingScore ratingScore={rating} numberReviews={numberReviews} />
        </Box>

        <Box>
          <Typography variant="h3" sx={titleStyles}>
            {t("product.seller.label")}
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Avatar>{seller[0]}</Avatar>
            <Typography>{seller}</Typography>
          </Grid>
        </Box>

        <Box>
          <Typography variant="h3" sx={{ ...titleStyles, mb: 0 }}>
            {t("product.details.label")}
          </Typography>
          <List sx={{ py: 0 }}>
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
