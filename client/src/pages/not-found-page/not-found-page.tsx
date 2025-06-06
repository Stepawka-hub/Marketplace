import { Header } from "@components/header";
import { NotFound } from "@components/not-found";
import { Box, Paper } from "@mui/material";
import { FC } from "react";

export const NotFoundPage: FC = () => {
  return (
    <Paper sx={{ minHeight: "100vh", height: "100%" }}>
      <Header />
      <Box sx={{ mt: 10 }}>
        <NotFound />
      </Box>
    </Paper>
  );
};
