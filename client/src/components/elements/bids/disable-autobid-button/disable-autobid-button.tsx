import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import StopIcon from "@mui/icons-material/Stop";
import { buttonStyle } from "./styles";
import { TDisableAutoBidButtonUIProps } from "./types";

export const DisableAutoBidButtonUI: FC<TDisableAutoBidButtonUIProps> = ({
  isDisabling = false,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Tooltip title={t("bids.actions.disable-autobid")}>
      <IconButton
        color="error"
        sx={buttonStyle}
        disabled={isDisabling}
        onClick={onClick}
      >
        <StopIcon />
      </IconButton>
    </Tooltip>
  );
};
