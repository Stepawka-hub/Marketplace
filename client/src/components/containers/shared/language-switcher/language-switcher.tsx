import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcherUI } from "@/components/elements";
import { useMenu } from "@/hooks/useMenu";
import { LANGUAGES_MAP } from "@/shared/constants";
import { isValidLanguage } from "@/shared/helpers";

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();
  const currLanguage = i18n.language;
  const validLanguage = isValidLanguage(currLanguage)
    ? currLanguage
    : LANGUAGES_MAP.RU;
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
    <LanguageSwitcherUI
      value={validLanguage}
      anchorRef={anchorRef}
      isOpen={isOpen}
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleClick={handleMenuItemClick}
    />
  );
};
