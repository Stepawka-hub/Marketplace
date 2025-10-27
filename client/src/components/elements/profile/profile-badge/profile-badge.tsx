import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Badge, IconButton, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { TProfileBadgeUIProps } from "./type";

export const ProfileBadgeUI: FC<TProfileBadgeUIProps> = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("profile.badge.tool-tip")}>
      <IconButton aria-label="profile" onClick={onClick}>
        <Badge color="warning">
          <PersonIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
