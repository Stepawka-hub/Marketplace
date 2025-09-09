import { FC, MouseEvent } from "react";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { likeButtonStyles } from "./styles";
import { LikeButtonProps } from "./type";

export const LikeButton: FC<LikeButtonProps> = ({
  isActive,
  title,
  handleClick,
}) => {
  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleClick();
  };

  return (
    <Tooltip title={title}>
      <IconButton sx={likeButtonStyles} onClick={onClick}>
        {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};
