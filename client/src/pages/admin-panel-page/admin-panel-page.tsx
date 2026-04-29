import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Tab, Tabs } from "@mui/material";
import { ROUTES } from "@/config/routes";

export const AdminPanelPage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Tabs>
        <Tab
          label="Дашборд"
          to={ROUTES.ADMIN_PANEL.DASHBOARD}
          component={NavLink}
          end
        />
        <Tab
          label="Заявки"
          to={ROUTES.ADMIN_PANEL.SELLER_REQUESTS}
          component={NavLink}
        />
        <Tab
          label="Пользователи"
          to={ROUTES.ADMIN_PANEL.USERS}
          component={NavLink}
        />
      </Tabs>
      <Outlet />
    </PageContainer>
  );
};
