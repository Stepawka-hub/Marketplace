import { FC } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import { BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Tab, Tabs } from '@mui/material';

export const AdminPanelPage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Tabs>
        <Tab label="Главная" to="/admin" component={NavLink} end />
        <Tab label="Заявки" to="/admin/seller-requests" component={NavLink} />
        <Tab label="Пользователи" to="/admin/users" component={NavLink} />
      </Tabs>
      <Outlet />
    </PageContainer>
  );
};
