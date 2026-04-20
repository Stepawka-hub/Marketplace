import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ProductDescription, UserAvatar } from "@/components/elements";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { mainContainerStyle, titleStyle, wrapperStyle } from "./styles";
import { TProductMetaProps } from "./type";

export const ProductMeta: FC<TProductMetaProps> = ({
  seller,
  description = "",
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
            <Typography>{`${firstName} ${lastName}`}</Typography>
          </Grid>
        </Box>

        <ProductDescription description={description} />
      </Box>
    </Paper>
  );
};
