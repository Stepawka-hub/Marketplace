import { getFavoriteTotalItems } from "@modules/favorites/services/slices/favorites";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useSelector } from "@store/types";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const FavoritesBadge: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const count = useSelector(getFavoriteTotalItems);

  const handleClick = () => {
    navigate("/favorites");
  };

  return (
    <Tooltip title={t("favorites.badge.tool-tip")}>
      <IconButton aria-label="favorites" onClick={handleClick}>
        <Badge badgeContent={count} color="warning">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
