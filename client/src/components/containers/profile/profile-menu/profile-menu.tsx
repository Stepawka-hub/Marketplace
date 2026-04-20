import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ROUTES } from "@/config/routes";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { isVendor } from "@/shared/helpers";
import { USER_ROLES } from "@/shared/constants";

import { ProfileMenuUI, TMenuItem } from "@/components/elements";
import { Loader } from "@/components/ui";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GavelIcon from "@mui/icons-material/Gavel";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  listItemIconStyle,
  listItemTextStyle,
  logoutButtonStyle,
} from "./styles";

export const ProfileMenu: FC = () => {
  const { t } = useTranslation();
  const { data, isLoading: isProfileLoading } = useGetMeQuery();
  const [logout, { isLoading }] = useLogoutMutation();

  if (isProfileLoading) {
    return <Loader />;
  }

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
      text: t("profile.menu-items.bids-history"),
      icon: <HistoryIcon />,
      to: ROUTES.PROFILE_BIDS_HISTORY,
    },
    {
      text: t("profile.menu-items.seller-panel"),
      icon: <MonetizationOnIcon />,
      to: ROUTES.PROFILE_SELLER_PANEL,
    },
  ];

  if (isVendor(data?.role || USER_ROLES.USER)) {
    menuItems.push({
      text: t("profile.menu-items.my-lots"),
      icon: <GavelIcon />,
      to: ROUTES.PROFILE_MY_LOTS,
    });
  }

  return (
    <ProfileMenuUI
      menuItems={menuItems}
      footer={
        <ListItemButton
          disabled={isLoading}
          sx={logoutButtonStyle}
          onClick={handleLogout}
        >
          <ListItemIcon sx={listItemIconStyle}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              isLoading
                ? t("profile.menu-items.logging-out")
                : t("profile.menu-items.log-out")
            }
            sx={listItemTextStyle}
          />
        </ListItemButton>
      }
    />
  );
};
