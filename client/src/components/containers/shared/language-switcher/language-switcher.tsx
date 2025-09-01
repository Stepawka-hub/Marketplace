import {
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMenu } from "@/hooks/useMenu";
import LanguageIcon from "@mui/icons-material/Language";
import { LANGUAGES } from "./constants";

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
      <Tooltip title={t("language-switcher.tool-tip")}>
        <IconButton ref={anchorRef} onClick={handleOpen}>
          <LanguageIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="language-menu"
        anchorEl={anchorRef.current}
        open={isOpen}
        onClose={handleClose}
      >
        {LANGUAGES.map((lang) => (
          <MenuItem
            key={lang}
            selected={lang === language}
            onClick={() => handleMenuItemClick(lang)}
          >
            <ListItemText>{t(`language-switcher.${lang}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
