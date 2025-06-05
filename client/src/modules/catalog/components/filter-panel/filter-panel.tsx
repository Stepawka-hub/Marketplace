import { Box, Divider, Drawer, List, ListItem } from "@mui/material";
import { FC } from "react";
import { FilterPanelProps } from "./type";
import { PriceSlider } from "../price-slider";
import { CategoryMenu } from "../category-menu";

export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const DrawerList = (
    <Box role="presentation">
      <List>
        <ListItem>
          <CategoryMenu />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <PriceSlider />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      sx={{
        width: isOpen ? 300 : 0,
        height: "100%",
        transition: "width .3s",
        "& .MuiDrawer-paper": {
          position: "relative",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "1rem",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
};
