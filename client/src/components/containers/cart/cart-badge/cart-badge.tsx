import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { CartBadgeUI } from "@/components/elements";
import { ROUTES } from "@/config/routes";
import { useSelector } from "@/store";
import { getCartTotalItems } from "@/store/slices/cart";

export const CartBadge: FC = () => {
  const count = useSelector(getCartTotalItems);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.CART);
  };

  return <CartBadgeUI count={count} onClick={handleClick} />;
};
