import { FC } from "react";
import { useTranslation } from "react-i18next";

import { StatCard } from "@/components/elements";
import { Box, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import { containerStyle, titleStyle, statsGridStyle } from "./styles";
import { TDashboardUIProps } from "./types";

export const DashboardUI: FC<TDashboardUIProps> = ({ stats }) => {
  const { t } = useTranslation();

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" sx={titleStyle}>
        {t("dashboard.title")}
      </Typography>

      <Grid container spacing={3} sx={statsGridStyle}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title={t("dashboard.stats.users")}
            value={stats.users}
            icon={<PeopleIcon />}
            color="primary"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title={t("dashboard.stats.active-lots")}
            value={stats.activeLots}
            icon={<ShoppingBagIcon />}
            color="success"
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <StatCard
            title={t("dashboard.stats.pending-requests")}
            value={stats.pendingRequests}
            icon={<PendingActionsIcon />}
            color="warning"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
