import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useLogoutMutation } from "@/services";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  listItemButtonStyle,
  listItemStyle,
  logoutButtonStyle,
  menuPaperStyle,
} from "./style";

export const ProfileMenu: FC = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  const menuItems = [
    {
      text: "Профиль",
      icon: <PersonIcon />,
      to: ROUTES.PROFILE,
    },
    {
      text: "Настройки",
      icon: <SettingsIcon />,
      to: ROUTES.PROFILE_SETTINGS,
    },
  ];

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
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <ListItemButton
            disabled={isLoading}
            sx={logoutButtonStyle}
            onClick={handleLogout}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={isLoading ? "Выходим..." : "Выйти"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Paper>
  );
};
