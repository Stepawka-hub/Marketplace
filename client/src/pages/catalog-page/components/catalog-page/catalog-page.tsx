import { Header } from "@components/header";
import { FC } from "react";
import { Catalog } from '@modules/catalog';

export const CatalogPage: FC = () => {
  return (
    <>
      <Header />
      <Catalog />
    </>
  );
};
