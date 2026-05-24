import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { buttonStyle } from "./styles";
import { TEnableAutoBidButtonUIProps } from "./types";

export const EnableAutoBidButtonUI: FC<TEnableAutoBidButtonUIProps> = ({
  isEnabling = false,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Tooltip title={t("bids.actions.enable-autobid")}>
      <IconButton
        color="info"
        sx={buttonStyle}
        disabled={isEnabling}
        onClick={onClick}
      >
        <AutorenewIcon />
      </IconButton>
    </Tooltip>
  );
};
