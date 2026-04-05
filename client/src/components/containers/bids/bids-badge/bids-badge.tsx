import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { useGetCartCountQuery } from "@/services/cart";
import { BidsBadgeUI } from "@/components/elements";

export const BidsBadge: FC = () => {
  const navigate = useNavigate();
  const { data: count = 0 } = useGetCartCountQuery();

  const handleClick = () => {
    navigate(ROUTES.MY_BIDS);
  };

  return <BidsBadgeUI count={count} onClick={handleClick} />;
};
