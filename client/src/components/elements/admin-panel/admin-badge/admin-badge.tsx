import { FC } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useTranslation } from "react-i18next";
import { Badge, IconButton, Tooltip } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import { badgeStyle } from "./styles";

export const AdminBadge: FC = () => {
  const { t } = useTranslation();

  return (
    <Tooltip title={t("admin.badge.tooltip")}>
      <IconButton component={Link} to={ROUTES.ADMIN_PANEL.ROOT} color="error">
        <Badge>
          <SecurityIcon sx={badgeStyle} />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};
