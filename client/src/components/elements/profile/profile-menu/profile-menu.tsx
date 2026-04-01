import { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import {
  listItemButtonStyle,
  listItemIconStyle,
  listItemStyle,
  listItemTextStyle,
  menuPaperStyle,
} from "./styles";
import { TProfileMenuProps } from "./types";

export const ProfileMenuUI: FC<TProfileMenuProps> = ({ menuItems, footer }) => {
  return (
    <Paper sx={menuPaperStyle}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={listItemStyle}>
            <ListItemButton
              component={NavLink}
              to={item.to}
              end
              sx={listItemButtonStyle}
            >
              <ListItemIcon sx={listItemIconStyle}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} sx={listItemTextStyle} />
            </ListItemButton>
          </ListItem>
        ))}
        {footer && (
          <>
            <Divider sx={{ my: 1 }} />
            <ListItem disablePadding>{footer}</ListItem>
          </>
        )}
      </List>
    </Paper>
  );
};
