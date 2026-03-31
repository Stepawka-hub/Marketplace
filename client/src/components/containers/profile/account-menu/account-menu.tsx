import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { AccountMenuUI } from "@/components/elements";
import {
  Avatar,
  Divider,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import { logoutMenuItemStyle, usernameStyle } from "./styles";

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

  const handleLogout = async () => {
    await logout().unwrap();
    handleClose();
  };

  return (
    <AccountMenuUI
      isOpen={isOpen}
      anchorEl={anchorEl}
      items={
        <div>
          <MenuItem onClick={navigateToProfile}>
            <Avatar />
            <Typography
              sx={usernameStyle}
            >{`${data?.firstName} ${data?.lastName}`}</Typography>
          </MenuItem>
          <Divider />
          <MenuItem
            disabled={isLoading}
            sx={logoutMenuItemStyle}
            onClick={handleLogout}
          >
            <ListItemIcon>
              <Logout fontSize="small" color="error" />
            </ListItemIcon>
            {isLoading
              ? t("profile.menu-items.logging-out")
              : t("profile.menu-items.log-out")}
          </MenuItem>
        </div>
      }
      onClick={handleClick}
      onClose={handleClose}
    />
  );
};
