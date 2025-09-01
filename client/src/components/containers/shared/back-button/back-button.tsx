import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BackButtonProps } from "./type";
import { IconButton, Tooltip } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ROUTES } from "@/config/routes";
import { backButtonStyle } from "./styles";

export const BackButton: FC<BackButtonProps> = ({
  title,
  path = ROUTES.CATALOG,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const label = title || t("common.buttons.back");

  const handleClick = () => navigate(path);

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} sx={backButtonStyle} onClick={handleClick}>
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Tooltip>
  );
};
