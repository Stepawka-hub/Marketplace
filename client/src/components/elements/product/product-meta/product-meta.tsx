import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  AttributeItem,
  ProductDescription,
  UserAvatar,
} from "@/components/elements";
import { Box, Grid, List, Paper, Typography } from "@mui/material";
import {
  listStyle,
  mainContainerStyle,
  productDetailsStyle,
  titleStyle,
  wrapperStyle,
} from "./styles";
import { TProductMetaProps } from "./type";

export const ProductMeta: FC<TProductMetaProps> = ({
  seller,
  description = "",
  attributes,
}) => {
  const { t } = useTranslation();
  const { firstName, lastName, avatar } = seller;

  return (
    <Paper variant="outlined" sx={wrapperStyle}>
      <Box sx={mainContainerStyle}>
        <Box>
          <Typography variant="h3" sx={titleStyle}>
            {t("product.seller.label")}
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <UserAvatar
              firstName={firstName}
              lastName={lastName}
              avatar={avatar}
            />
            <Typography>{`${seller.firstName} ${seller.lastName}`}</Typography>
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

        <ProductDescription description={description} />
      </Box>
    </Paper>
  );
};
