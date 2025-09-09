import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Badge, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TFavoriesBadgeUIProps } from "./types";

export const FavoritesBadgeUI: FC<TFavoriesBadgeUIProps> = ({
  count,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t("favorites.badge.tool-tip")}>
      <IconButton aria-label="favorites" onClick={onClick}>
        <Badge badgeContent={count} color="warning">
          <FavoriteIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
