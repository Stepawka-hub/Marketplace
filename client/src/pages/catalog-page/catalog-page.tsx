import { FC, useCallback, useState } from "react";
import { ProductList } from "@/components/containers";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid, IconButton } from "@mui/material";

export const CatalogPage: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onFilterClick = useCallback(() => {
    setIsSidebarOpen((p) => !p);
  }, []);

  return (
    <Grid container spacing={4} p={3} direction="column">
      <Grid container spacing={1} alignItems="center">
        <Grid size="grow">
          <CatalogSearch />
        </Grid>
        <Grid>
          <IconButton onClick={onFilterClick}>
            <FilterAltIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Grid container spacing={0}>
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
