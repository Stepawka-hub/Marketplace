import { Grid } from "@mui/material";
import { FC } from "react";
import { CatalogSearch } from "../catalog-search";
import { ProductList } from "../product-list";
import { FilterPanel } from '../filter-panel';

export const Catalog: FC = () => {
  return (
    <Grid container spacing={4} p={3}>
      <Grid>
        {/* <FilterPanel /> */}
        <CatalogSearch />
      </Grid>
      <Grid>
        <ProductList />
      </Grid>
    </Grid>
  );
};
