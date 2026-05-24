import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import { buttonStyle } from "./styles";
import { TPlaceBidButtonUIProps } from "./type";

export const PlaceBidButtonUI: FC<TPlaceBidButtonUIProps> = ({
  isPlacing = false,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Tooltip title={t("bids.actions.place-bid")}>
      <IconButton
        color="success"
        sx={buttonStyle}
        disabled={isPlacing}
        onClick={onClick}
      >
        <GavelIcon />
      </IconButton>
    </Tooltip>
  );
};
