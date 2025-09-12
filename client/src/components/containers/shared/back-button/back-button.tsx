import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BackButtonProps } from "./type";
import { ROUTES } from "@/config/routes";
import { BackButtonUI } from "@/components/elements";

export const BackButton: FC<BackButtonProps> = ({
  title,
  path = ROUTES.CATALOG,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const label = title || t("common.buttons.back");

  const handleClick = () => navigate(path);

  return <BackButtonUI title={label} onClick={handleClick} />;
};
