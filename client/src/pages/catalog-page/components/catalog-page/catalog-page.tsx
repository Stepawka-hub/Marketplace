import { Header } from "@components/header";
import { Catalog } from "@modules/catalog";
import { FC } from "react";

export const CatalogPage: FC = () => {
  return (
    <>
      <Header />
      <Catalog />
    </>
  );
};
