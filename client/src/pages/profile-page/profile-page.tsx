import { FC } from "react";
import { BackButton, ProfileData, ProfileMenu } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Grid } from "@mui/material";

export const ProfilePage: FC = () => {
  return (
    <PageContainer>
      <BackButton />
      <Grid container>
        <Grid>
          <ProfileMenu />
        </Grid>
        <Grid>
          <ProfileData />
        </Grid>
      </Grid>
    </PageContainer>
  );
};
