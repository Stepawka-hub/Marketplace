import { Header } from "@components/header";
import { NotFound } from "@components/not-found";
import { Box } from "@mui/material";
import { FC } from "react";

export const NotFoundPage: FC = () => {
  return (
    <>
      <Header />
      <Box sx={{ mt: 10 }}>
        <NotFound />
      </Box>
    </>
  );
};
