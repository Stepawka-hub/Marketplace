import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import GavelIcon from "@mui/icons-material/Gavel";
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
    <Button
      variant="contained"
      fullWidth
      startIcon={<GavelIcon />}
      disabled={isPlacing}
      onClick={onClick}
    >
      {t(isPlacing ? "bid.actions.placing-bid" : "bid.actions.place-bid")}
    </Button>
  );
};
