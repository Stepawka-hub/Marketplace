import { Grid } from "@mui/material";
import { FC } from "react";
import { CatalogSearch } from "../catalog-search";
import { ProductList } from "../product-list";

export const Catalog: FC = () => {
  return (
    <Grid container spacing={2} p={3}>
      <CatalogSearch />
      <ProductList />
    </Grid>
  );
};
