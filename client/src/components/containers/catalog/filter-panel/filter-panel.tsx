import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "@/store";
import { getFilters, setFilters } from "@/store/slices/catalog";
import { LOT_STATUSES, MAX_LOT_PRICE, MIN_LOT_PRICE } from "@/shared/constants";

import { StatusFilter } from "@/components/containers";
import { PriceSlider } from "@/components/elements";
import { Drawer, DrawerHeader } from "@/components/ui";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import {
  applyBtnBoxStyle,
  applyBtnStyle,
  dividerStyle,
  drawerStyle,
  filterBoxStyle,
  priceSliderBoxStyle,
} from "./styles";
import { TLotStatus } from "@/shared/types";
import { FilterPanelProps } from "./type";

export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filters = useSelector(getFilters);
  const { max, min } = filters.price;

  const [priceValue, setPriceValue] = useState([min, max]);
  const [selectedStatuses, setSelectedStatuses] = useState<TLotStatus[]>(
    filters.status || [
      LOT_STATUSES.ACTIVE,
      LOT_STATUSES.COMPLETED,
      LOT_STATUSES.EXPIRED,
    ],
  );
  const handleApplyFilters = () => {
    const [min, max] = priceValue;
    dispatch(
      setFilters({
        price: {
          min,
          max,
        },
        status: selectedStatuses,
      }),
    );
    onClose();
  };

  return (
    <Drawer
      open={isOpen}
      variant="temporary"
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
              <ListItem sx={priceSliderBoxStyle}>
                <StatusFilter
                  selectedStatuses={selectedStatuses}
                  onChange={setSelectedStatuses}
                />
              </ListItem>
            </List>

            <Divider sx={dividerStyle} />

            <List>
              <ListItem sx={priceSliderBoxStyle}>
                <PriceSlider
                  priceValue={priceValue}
                  priceRange={{
                    min: MIN_LOT_PRICE,
                    max: MAX_LOT_PRICE,
                  }}
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
