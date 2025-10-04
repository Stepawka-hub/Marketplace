import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TThemeSwitcherUIProps } from "./types";
import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { THEME_ICONS } from "./constants";
import { THEMES } from "@/shared/constants";

export const ThemeSwitcherUI: FC<TThemeSwitcherUIProps> = ({
  value,
  anchorRef,
  isOpen,
  handleOpen,
  handleClose,
  handleClick,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Tooltip title={t("theme-switcher.tool-tip")}>
        <IconButton ref={anchorRef} onClick={handleOpen}>
          {THEME_ICONS[value]}
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
            selected={themeItem === value}
            onClick={() => handleClick(themeItem)}
          >
            <ListItemIcon>{THEME_ICONS[themeItem]}</ListItemIcon>
            <ListItemText>{t(`theme-switcher.${themeItem}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
