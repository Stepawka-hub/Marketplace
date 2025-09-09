import { FC, MouseEvent } from "react";
import { TBackButtonUIProps } from "./type";
import { IconButton, Tooltip } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { backButtonStyle } from "./styles";

export const BackButtonUI: FC<TBackButtonUIProps> = ({ title, onClick }) => {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Tooltip title={title}>
      <IconButton aria-label={title} sx={backButtonStyle} onClick={handleClick}>
        <KeyboardArrowLeftIcon />
      </IconButton>
    </Tooltip>
  );
};
