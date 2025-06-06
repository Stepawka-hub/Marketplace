import {
  getCategories,
  getFilters,
  getPriceRange,
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
import { useTranslation } from "react-i18next";

export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const categories = useSelector(getCategories);
  const priceRange = useSelector(getPriceRange);
  const filters = useSelector(getFilters);
  const { max, min } = filters.price;

  const [category, setCategory] = useState(filters.category);
  const [priceValue, setPriceValue] = useState([min, max]);

  const handleApplyFilters = () => {
    const [min, max] = priceValue;
    dispatch(setFilters({ category, price: { min, max } }));
    onClose();
  };

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
                <PriceSlider
                  priceValue={priceValue}
                  priceRange={priceRange}
                  setPriceValue={setPriceValue}
                />
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
                  {t("filter.submit-btn-label")}
                </Button>
              </ListItem>
            </List>
          </Box>
        </>
      )}
    </Drawer>
  );
};
