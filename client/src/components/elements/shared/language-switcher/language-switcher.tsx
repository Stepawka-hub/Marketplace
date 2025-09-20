import { FC } from "react";
import { TLanguageSwitcherUIProps } from "./types";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { LANGUAGES } from "@/shared/constants";

export const LanguageSwitcherUI: FC<TLanguageSwitcherUIProps> = ({
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
            selected={lang === value}
            onClick={() => handleClick(lang)}
          >
            <ListItemText>{t(`language-switcher.${lang}`)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
