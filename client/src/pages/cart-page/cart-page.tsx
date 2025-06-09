import { Header } from "@components/header";
import { Cart } from "@modules/cart";
import { FC } from "react";

export const CartPage: FC = () => {
  return (
    <>
      <Header />
      <Cart />
    </>
  );
};
