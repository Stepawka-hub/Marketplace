import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartBadgeUI } from "@/components/elements";
import { ROUTES } from "@/config/routes";
import { useGetCartCountQuery } from "@/services/cart";

export const CartBadge: FC = () => {
  const navigate = useNavigate();
  const { data: count = 0 } = useGetCartCountQuery();

  const handleClick = () => {
    navigate(ROUTES.CART);
  };

  return <CartBadgeUI count={count} onClick={handleClick} />;
};
