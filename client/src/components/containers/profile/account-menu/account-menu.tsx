import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { formatBalance, formattedWithSpace } from "@/shared/helpers";
import { AccountMenuUI, UserAvatar } from "@/components/elements";
import {
  Box,
  Divider,
  ListItemIcon,
  MenuItem,
  Typography,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import { lockIconStyle, logoutMenuItemStyle, usernameStyle } from "./styles";

export const AccountMenu: FC = () => {
  const { t, i18n } = useTranslation();
  const { data } = useGetMeQuery();
  const {
    firstName = "",
    lastName = "",
    avatar = "",
    balance = 0,
    frozenBalance = 0,
  } = data || {};
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
            <UserAvatar
              firstName={firstName}
              lastName={lastName}
              avatar={avatar}
            />
            <Typography
              sx={usernameStyle}
            >{`${firstName} ${lastName}`}</Typography>
          </MenuItem>

          <Divider />

          <MenuItem onClick={navigateToProfile}>
            <ListItemIcon>
              <AccountBalanceWalletIcon fontSize="small" color="success" />
            </ListItemIcon>
            <Box>
              <Typography variant="caption" color="text.secondary">
                {t("profile.account-menu.list-items.balance")}
              </Typography>
              <Typography fontWeight="medium">
                {formattedWithSpace(formatBalance(balance), i18n.language)} ₽
              </Typography>
            </Box>
          </MenuItem>

          <MenuItem onClick={navigateToProfile}>
            <ListItemIcon>
              <LockIcon fontSize="small" sx={lockIconStyle} />
            </ListItemIcon>
            <Box>
              <Typography variant="caption" color="text.secondary">
                {t("profile.account-menu.list-items.frozen-balance")}
              </Typography>
              <Typography fontWeight="medium">
                {formattedWithSpace(
                  formatBalance(frozenBalance),
                  i18n.language,
                )}{" "}
                ₽
              </Typography>
            </Box>
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
      avatar={
        <UserAvatar firstName={firstName} lastName={lastName} avatar={avatar} />
      }
      onClick={handleClick}
      onClose={handleClose}
    />
  );
};
