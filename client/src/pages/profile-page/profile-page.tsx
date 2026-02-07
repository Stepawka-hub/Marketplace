import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BackButton, ProfileMenu } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Grid } from "@mui/material";

export const ProfilePage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Grid container columnGap={4} mt={1}>
        <Grid>
          <ProfileMenu />
        </Grid>
        <Grid>
          <Outlet />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
