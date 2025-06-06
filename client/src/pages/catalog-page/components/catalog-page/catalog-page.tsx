import { Header } from "@components/header";
import { FC } from "react";
import { Catalog } from "@modules/catalog";
import { Paper } from "@mui/material";

export const CatalogPage: FC = () => {
  return (
    <Paper sx={{ minHeight: "100vh" }}>
      <Header />
      <Catalog />
    </Paper>
  );
};
