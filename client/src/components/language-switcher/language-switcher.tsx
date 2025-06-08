import { IconButton, ListItemText, Menu, MenuItem } from "@mui/material";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useMenu } from "@hooks/useMenu";
import LanguageIcon from "@mui/icons-material/Language";

export const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const { isOpen, anchorRef, handleOpen, handleClose } = useMenu();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "ru";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const handleMenuItemClick = (value: string) => {
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
    handleClose();
  };

  return (
    <>
      <IconButton ref={anchorRef} onClick={handleOpen}>
        <LanguageIcon />
      </IconButton>

      <Menu
        id="language-menu"
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleMenuItemClick("ru")}
          selected={language === "ru"}
        >
          <ListItemText>{t("language-switcher.ru")}</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuItemClick("en")}
          selected={language === "dark"}
        >
          <ListItemText>{t("language-switcher.en")}</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};
