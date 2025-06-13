import { FC } from "react";
import { LikeButtonProps } from "./type";
import { red } from "@mui/material/colors";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikeButton: FC<LikeButtonProps> = ({ isActive, title, callback }) => (
  <Tooltip title={title}>
    <IconButton sx={{ color: red[600] }} onClick={callback}>
      {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  </Tooltip>
);
