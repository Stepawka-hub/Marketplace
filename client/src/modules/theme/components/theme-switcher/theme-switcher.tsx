import { useTheme } from "@hooks/useTheme";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

import { useMenu } from "@hooks/useMenu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Theme } from "@providers/theme/types";

export const ThemeSwitcher: FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation();
  const { isOpen, anchorRef, handleOpen, handleClose } = useMenu();

  const handleMenuItemClick = (value: Theme) => {
    setTheme(value);
    handleClose();
  };

  return (
    <>
      <Tooltip title={t("theme-switcher.tool-tip")}>
        <IconButton ref={anchorRef} onClick={handleOpen}>
          {theme === "dark" && <DarkModeIcon />}
          {theme === "light" && <LightModeIcon />}
          {theme === "system" && <SettingsBrightnessIcon />}
        </IconButton>
      </Tooltip>

      <Menu
        id="theme-menu"
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("light")}
          selected={theme === "light"}
        >
          <ListItemIcon>
            <LightModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("theme-switcher.light")}</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => handleMenuItemClick("dark")}
          selected={theme === "dark"}
        >
          <ListItemIcon>
            <DarkModeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("theme-switcher.dark")}</ListItemText>
        </MenuItem>

        <MenuItem
          onClick={() => handleMenuItemClick("system")}
          selected={theme === "system"}
        >
          <ListItemIcon>
            <SettingsBrightnessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>{t("theme-switcher.system")}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
