import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import { createLotButtonStyles } from "./styles";
import { TCreateLotButtonUIProps } from "./type";

export const CreateLotButtonUI: FC<TCreateLotButtonUIProps> = ({
  disabled = false,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Tooltip title={t("lot.actions.create-lot")}>
      <IconButton
        sx={createLotButtonStyles}
        disabled={disabled}
        onClick={onClick}
      >
        <GavelIcon />
      </IconButton>
    </Tooltip>
  );
};
