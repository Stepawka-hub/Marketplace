import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Avatar, Box, Grid, List, Paper, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { AttributeItem } from "@ui/attribute-item";
import { FC } from "react";
import { titleStyles } from "./styles";
import { ProductMetaProps } from "./type";

export const ProductMeta: FC<ProductMetaProps> = ({
  rating,
  numberReviews,
  seller,
  attributes,
}) => (
  <Paper sx={{ p: 2, width: 300 }} variant="outlined">
    <Grid container flexDirection="column" spacing={2}>
      <Box>
        <Typography variant="h3" sx={titleStyles}>
          Рейтинг
        </Typography>
        <Grid container alignItems="center" spacing={0.5}>
          <StarRateRoundedIcon
            sx={{ marginBottom: "0.145rem", color: yellow[800] }}
          />
          <Typography>
            {rating} • {numberReviews} отзывов
          </Typography>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h3" sx={titleStyles}>
          Продавец
        </Typography>
        <Grid container alignItems="center" spacing={1}>
          <Avatar>{seller[0]}</Avatar>
          <Typography>{seller}</Typography>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h3" sx={{ ...titleStyles, mb: 0 }}>
          О товаре
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
    </Grid>
  </Paper>
);
