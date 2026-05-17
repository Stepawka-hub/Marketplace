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
      startIcon={<GavelIcon />}
      sx={{
        justifyContent: "flex-start",
      }}
      disabled={isPlacing}
      onClick={onClick}
    >
      {t(isPlacing ? "bids.actions.placing-bid" : "bids.actions.place-bid")}
    </Button>
  );
};
