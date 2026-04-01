import { FC } from "react";
import { Outlet } from "react-router-dom";
import { BackButton, ProfileMenu } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Grid } from "@mui/material";
import { contentGridStyle, gridContainerStyle } from "./styles";

export const ProfilePage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Grid container sx={gridContainerStyle}>
        <Grid>
          <ProfileMenu />
        </Grid>
        <Grid sx={contentGridStyle}>
          <Outlet />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
