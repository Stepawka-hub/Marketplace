import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { AccountMenuUI } from "@/components/elements";
import { Avatar, Divider, ListItemIcon, MenuItem } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";

export const AccountMenu: FC = () => {
  const { t } = useTranslation();
  const { data } = useGetMeQuery();
  const [logout, { isLoading }] = useLogoutMutation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToProfile = () => {
    navigate(ROUTES.PROFILE);
    handleClose();
  };

  const navigateToSettings = () => {
    navigate(ROUTES.PROFILE_SETTINGS);
    handleClose();
  };

  const handleLogout = async () => {
    await logout().unwrap();
    handleClose();
  };

  return (
    <AccountMenuUI
      isOpen={isOpen}
      anchorEl={anchorEl}
      items={
        <>
          <MenuItem onClick={navigateToProfile}>
            <Avatar />
            {`${data?.firstName} ${data?.lastName}`}
          </MenuItem>
          <Divider />
          <MenuItem onClick={navigateToSettings}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {t("profile.account-menu.menu-items.settings")}
          </MenuItem>
          <MenuItem onClick={handleLogout} disabled={isLoading}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {isLoading
              ? t("profile.account-menu.menu-items.logging-out")
              : t("profile.account-menu.menu-items.log-out")}
          </MenuItem>
        </>
      }
      onClick={handleClick}
      onClose={handleClose}
    />
  );
};
