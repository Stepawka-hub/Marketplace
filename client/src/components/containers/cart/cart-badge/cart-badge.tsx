import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartBadgeUI } from "@/components/elements";
import { ROUTES } from "@/config/routes";
import { TCartBadgeProps } from "./type";

export const CartBadge: FC<TCartBadgeProps> = ({ count }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CART);
  };

  return <CartBadgeUI count={count} onClick={handleClick} />;
};
