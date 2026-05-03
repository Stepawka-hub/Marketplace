import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Tab, Tabs } from "@mui/material";
import { ROUTES } from "@/config/routes";
import { tabsStyle, tabStyle } from "./styles";

export const AdminPanelPage: FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const getActiveTabValue = () =>
    pathname === ROUTES.ADMIN_PANEL.DASHBOARD
      ? ROUTES.ADMIN_PANEL.ROOT
      : pathname;

  return (
    <PageContainer>
      <BackButton />
      <Tabs variant="scrollable" value={getActiveTabValue()} sx={tabsStyle}>
        <Tab
          label={t("dashboard.title")}
          value={ROUTES.ADMIN_PANEL.ROOT}
          to={ROUTES.ADMIN_PANEL.DASHBOARD}
          component={NavLink}
          sx={tabStyle}
          end
        />
        <Tab
          label={t("seller-requests.title")}
          value={ROUTES.ADMIN_PANEL.SELLER_REQUESTS}
          to={ROUTES.ADMIN_PANEL.SELLER_REQUESTS}
          component={NavLink}
          sx={tabStyle}
        />
        <Tab
          label={t("users.title")}
          value={ROUTES.ADMIN_PANEL.USERS}
          to={ROUTES.ADMIN_PANEL.USERS}
          component={NavLink}
          sx={tabStyle}
        />
      </Tabs>
      <Outlet />
    </PageContainer>
  );
};
