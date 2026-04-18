import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetMyActiveBidsCountQuery } from "@/services";
import { ROUTES } from "@/config/routes";
import { BidsBadgeUI } from "@/components/elements";

export const BidsBadge: FC = () => {
  const { data: count = 0 } = useGetMyActiveBidsCountQuery();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.MY_BIDS);
  };

  return <BidsBadgeUI count={count} onClick={handleClick} />;
};
