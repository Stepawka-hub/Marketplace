import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { BackButtonProps } from "./type";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const BackButton: FC<BackButtonProps> = ({
  title,
  path = "/catalog",
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const label = title || t("common.buttons.back");

  const handleClick = () => navigate(path);

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        sx={{ mb: 2, backgroundColor: "custom.primary", border: "1px solid" }}
        onClick={handleClick}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Tooltip>
  );
};
