import {
  ProductDescription,
  ProductImages,
  ProductMeta,
  ProductPurchase,
  ProductReviews,
  ProductSpecs,
} from "@modules/product/components";
import { Box, Grid, Typography } from "@mui/material";
import { TAttribute } from "@types";
import { FC, useState } from "react";
import { ProductProps } from "./type";

export const Product: FC<ProductProps> = ({ id }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isInFavorites, setIsInFavories] = useState(false);

  const attributes: TAttribute[] = [
    { name: "Тип", value: "Шампунь" },
    { name: "Объем", value: "500 мл" },
    { name: "Атрибут 1", value: "Значение 1" },
    { name: "Атрибут 2", value: "Значение 2" },
    { name: "Атрибут 3", value: "Значение 3" },
    { name: "Атрибут 4", value: "Значение 4" },
  ];

  const images = [
    "https://newcdn.igromania.ru/mnt/articles/6/5/0/8/b/3/32271/html/more/19_ecaeb2e71901a61cbd5a6_original.jpg",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://50.img.avito.st/image/1/1.a9hexra4xzFobwU0BJ925XFnxTfgZ0U5KGLFM-5vzzvo.RsHlr7pvOdUxAVzY0cNi53kd4BR49GmkrhkGkTmgjl4",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://00.img.avito.st/image/1/1.Gj2alraxttTMMzzTosoWLOg3tNQoI7LW.f8a5CgXdQIwlsdOirgVkGtqdioANcCujBNt3tomeEEI?cqp=2.d_Zf6Bm1shCMrOHY-Vj18hvV6BjwI358IHMSOoasWlTdJXwRxVlJDedyKiY=",
    "https://newcdn.igromania.ru/mnt/articles/6/5/0/8/b/3/32271/html/more/19_ecaeb2e71901a61cbd5a6_original.jpg",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://50.img.avito.st/image/1/1.a9hexra4xzFobwU0BJ925XFnxTfgZ0U5KGLFM-5vzzvo.RsHlr7pvOdUxAVzY0cNi53kd4BR49GmkrhkGkTmgjl4",
    "https://80.img.avito.st/image/1/1.QqFbbra49EhtxyxNU2tD6ETP7E7lz2xALcrsSuvH5kLt.rRxsMl2KcM9hy9A8W9VczgvERqzMaf-hozkw3b7eiOs",
    "https://00.img.avito.st/image/1/1.Gj2alraxttTMMzzTosoWLOg3tNQoI7LW.f8a5CgXdQIwlsdOirgVkGtqdioANcCujBNt3tomeEEI?cqp=2.d_Zf6Bm1shCMrOHY-Vj18hvV6BjwI358IHMSOoasWlTdJXwRxVlJDedyKiY=",
  ];

  const addToCart = () => {
    setIsInCart((p) => !p);
  };
  const addToFavorites = () => {
    setIsInFavories((p) => !p);
  };

  return (
    <Box>
      <Typography
        variant="h2"
        sx={{ mb: 2, fontSize: "2rem", fontWeight: 600 }}
      >
        {`Product: ${id}`}
      </Typography>
      <Grid container justifyContent="space-between" spacing={4}>
        <Grid size={6}>
          <ProductImages images={images} />
        </Grid>
        <Grid size={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <ProductPurchase
              isInCart={isInCart}
              isInFavorites={isInFavorites}
              price={3000}
              addToCart={addToCart}
              addToFavorites={addToFavorites}
            />
            <ProductMeta
              rating={4.4}
              numberReviews={5346}
              seller="Stepawka"
              attributes={attributes}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container flexDirection="column">
        <ProductDescription />
        <ProductSpecs />
        <ProductReviews />
      </Grid>
    </Box>
  );
};
