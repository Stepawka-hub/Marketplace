import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartBadge } from "@/components/elements";
import { ROUTES } from "@/config/routes";
import { TCartBadgeContainerProps } from "./type";

export const CartBadgeContainer: FC<TCartBadgeContainerProps> = ({ count }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CART);
  };

  return <CartBadge count={count} onClick={handleClick} />;
};
