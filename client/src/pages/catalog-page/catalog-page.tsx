import { useCart } from "@hooks/useCart";
import { useFavorites } from "@hooks/useFavorites";
import { CatalogSearch, FilterPanel } from "@modules/catalog";
import { ProductListContainer } from "@modules/catalog";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid, IconButton } from "@mui/material";
import { FC, useCallback, useState } from "react";

export const CatalogPage: FC = () => {
  const { isInCart, addToCart } = useCart();
  const { isInFavorites, toggleFavorite } = useFavorites();
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
          <ProductListContainer
            isInCart={isInCart}
            isInFavorites={isInFavorites}
            addToCart={addToCart}
            toggleFavorite={toggleFavorite}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
