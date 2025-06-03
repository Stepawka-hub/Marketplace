import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid, IconButton } from "@mui/material";
import { FC, useState } from "react";
import { CatalogSearch } from "../catalog-search";
import { FilterPanel } from "../filter-panel";
import { ProductList } from "../product-list";

export const Catalog: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onClickButton = () => {
    setIsSidebarOpen((p) => !p);
  };

  return (
    <Grid container spacing={4} p={3} direction="column">
      <Grid container spacing={1} alignItems="center">
        <Grid size='grow'>
          <CatalogSearch />
        </Grid>
        <Grid>
          <IconButton onClick={onClickButton}>
            <FilterAltIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={isSidebarOpen ? 3 : 0}>
        <Grid>
          <FilterPanel
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </Grid>
        <Grid size="grow">
          <ProductList />
        </Grid>
      </Grid>
    </Grid>
  );
};
