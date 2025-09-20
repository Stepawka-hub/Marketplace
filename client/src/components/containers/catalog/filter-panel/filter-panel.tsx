import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FilterPanelProps } from "./type";
import { useDispatch, useSelector } from "@/store";
import {
  getCategories,
  getFilters,
  getPriceRange,
  setFilters,
} from "@/store/slices/catalog";
import { Drawer, DrawerHeader } from "@/components/ui";
import { CategoryMenu, PriceSlider } from "@/components/elements";
import {
  applyBtnBoxStyle,
  applyBtnStyle,
  categoryMenuBoxStyle,
  dividerStyle,
  drawerStyle,
  filterBoxStyle,
  priceSliderBoxStyle,
} from "./styles";

// Todo: Переписать компонент
export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

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
      variant={matches ? "temporary" : "persistent"}
      sx={isOpen ? drawerStyle.active : drawerStyle.base}
      onClose={onClose}
    >
      {isOpen && (
        <>
          <DrawerHeader>
            <IconButton onClick={onClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>

          <Divider sx={dividerStyle} />

          <Box sx={filterBoxStyle}>
            <List>
              <ListItem sx={categoryMenuBoxStyle}>
                <CategoryMenu
                  categories={categories}
                  selectedCategory={category}
                  onChange={setCategory}
                />
              </ListItem>
              <ListItem sx={priceSliderBoxStyle}>
                <PriceSlider
                  priceValue={priceValue}
                  priceRange={priceRange}
                  setPriceValue={setPriceValue}
                />
              </ListItem>
            </List>

            <Divider sx={dividerStyle} />

            <List>
              <ListItem sx={applyBtnBoxStyle}>
                <Button
                  variant="contained"
                  sx={applyBtnStyle}
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
