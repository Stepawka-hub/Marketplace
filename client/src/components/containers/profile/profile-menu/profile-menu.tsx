import { FC } from "react";
import { ROUTES } from "@/config/routes";
import { useLogoutMutation } from "@/services";
import { ProfileMenuUI, TMenuItem } from "@/components/elements";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutButtonStyle } from "./styles";
import { useTranslation } from "react-i18next";

export const ProfileMenu: FC = () => {
  const { t } = useTranslation();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  const menuItems: TMenuItem[] = [
    {
      text: t("profile.menu-items.profile"),
      icon: <PersonIcon />,
      to: ROUTES.PROFILE,
    },
    {
      text: t("profile.menu-items.settings"),
      icon: <SettingsIcon />,
      to: ROUTES.PROFILE_SETTINGS,
    },
  ];

  return (
    <ProfileMenuUI
      menuItems={menuItems}
      footer={
        <ListItemButton
          disabled={isLoading}
          sx={logoutButtonStyle}
          onClick={handleLogout}
        >
          <ListItemIcon sx={{ color: "inherit" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              isLoading
                ? t("profile.menu-items.logging-out")
                : t("profile.menu-items.log-out")
            }
          />
        </ListItemButton>
      }
    />
  );
};
