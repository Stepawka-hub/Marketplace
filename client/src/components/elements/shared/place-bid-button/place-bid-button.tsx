import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { TPlaceBidButtonUIProps } from "./type";

export const PlaceBidButtonUI: FC<TPlaceBidButtonUIProps> = ({
  isPlaced,
  disabled,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={isPlaced ? <CheckCircleIcon /> : <GavelIcon />}
      disabled={disabled}
      onClick={onClick}
    >
      {isPlaced
        ? t("product.buttons.bid-placed")
        : t("product.buttons.place-bid")}
    </Button>
  );
};
