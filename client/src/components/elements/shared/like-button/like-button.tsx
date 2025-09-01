import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton, Tooltip } from "@mui/material";
import { FC, MouseEvent } from "react";
import { likeButtonStyles } from "./styles";
import { LikeButtonProps } from "./type";

export const LikeButton: FC<LikeButtonProps> = ({
  isActive,
  title,
  callback,
}) => {
  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    callback();
  };
  
  return (
    <Tooltip title={title}>
      <IconButton sx={likeButtonStyles} onClick={onClick}>
        {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};
