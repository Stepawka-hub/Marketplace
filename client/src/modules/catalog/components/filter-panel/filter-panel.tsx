import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { FilterPanelProps } from "./type";

export const FilterPanel: FC<FilterPanelProps> = ({ isOpen, onClose }) => {
  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={onClose}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      variant="persistent"
      sx={{
        width: isOpen ? 250 : 0,
        height: "100%",
        transition: "width 0.3s",
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
