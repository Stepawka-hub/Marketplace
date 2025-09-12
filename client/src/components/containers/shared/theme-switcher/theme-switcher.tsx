import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useMenu } from "@/hooks/useMenu";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/providers";
import { THEME_ICONS, THEMES } from "./constants";

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
          {THEME_ICONS[theme]}
        </IconButton>
      </Tooltip>

      <Menu
        id="theme-menu"
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
      >
        {THEMES.map((themeItem) => (
          <MenuItem
            key={themeItem}
            selected={themeItem === theme}
            onClick={() => handleMenuItemClick(themeItem)}
          >
            <ListItemIcon>{THEME_ICONS[themeItem]}</ListItemIcon>
            <ListItemText>{t(`theme-switcher.${themeItem}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
