import {
  getCategories,
  getFilters,
  setFilters,
} from "@modules/catalog/services/slices/catalog";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { useDispatch, useSelector } from "@store";
import { Drawer } from "@ui/drawer";
import { DrawerHeader } from "@ui/drawer-header";
import { FC, useState } from "react";
import { CategoryMenu } from "../category-menu";
import { PriceSlider } from "../price-slider";
import { FilterPanelProps } from "./type";

export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const filters = useSelector(getFilters);

  const [category, setCategory] = useState(filters.category);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handleApplyFilters = () => {
    dispatch(setFilters({ category, price: { min: 0, max: 100 } }));
    onClose();
  };

  const DrawerList = (
    <Box>
      <List>
        <ListItem sx={{ mb: 1 }}>
          <CategoryMenu
            categories={categories}
            selectedCategory={category}
            onChange={setCategory}
          />
        </ListItem>
        <ListItem sx={{ px: 4 }}>
          <PriceSlider />
        </ListItem>
      </List>

      <Divider sx={{ my: 1 }} />

      <List>
        <ListItem sx={{ justifyContent: "center" }}>
          <Button
            sx={{ whiteSpace: "nowrap", overflow: "hidden" }}
            variant="contained"
            onClick={handleApplyFilters}
          >
            Применить изменения
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      sx={{ width: isOpen ? 320 : 0 }}
    >
      {isOpen && (
        <>
          <DrawerHeader>
            <IconButton onClick={onClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ mb: 1 }} />
          {DrawerList}
        </>
      )}
    </Drawer>
  );
};
