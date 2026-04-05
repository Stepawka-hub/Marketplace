import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { likeButtonStyles } from "./styles";
import { TLikeButtonUIProps } from "./type";

export const LikeButtonUI: FC<TLikeButtonUIProps> = ({
  isActive,
  disabled = false,
  handleAction,
}) => {
  const { t } = useTranslation();

  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    handleAction();
  };

  return (
    <Tooltip
      title={
        isActive
          ? t("product.buttons.remove-from-favorites")
          : t("product.buttons.add-to-favorites")
      }
    >
      <IconButton sx={likeButtonStyles} disabled={disabled} onClick={onClick}>
        {isActive ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};
