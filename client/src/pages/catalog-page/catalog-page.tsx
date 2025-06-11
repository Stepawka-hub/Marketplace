import { addProduct, getProducts } from "@modules/cart";
import { CatalogSearch, FilterPanel, ProductList } from "@modules/catalog";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "@store/types";
import { TProduct } from "@types";
import { FC, useCallback, useMemo, useState } from "react";

export const CatalogPage: FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getProducts);
  const cartItemsIds = useMemo(() => cartItems.map((c) => c.id), [cartItems]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddToCart = useCallback(
    (product: TProduct) => {
      dispatch(addProduct(product));
    },
    [dispatch]
  );

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
          <ProductList
            cartItemsIds={cartItemsIds}
            addToCart={handleAddToCart}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
