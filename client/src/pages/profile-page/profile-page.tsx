import { FC } from "react";
import { useGetMeQuery, useLogoutMutation } from "@/services";
import { BackButton } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Box, Button, Typography } from "@mui/material";

export const ProfilePage: FC = () => {
  const { data } = useGetMeQuery();
  const [logout, { isLoading }] = useLogoutMutation();

  return (
    <PageContainer>
      <BackButton />
      <Box>
        <Typography>{`${data?.firstName} ${data?.lastName}`}</Typography>
        <Button disabled={isLoading} onClick={logout}>
          Logout
        </Button>
      </Box>
    </PageContainer>
  );
};
