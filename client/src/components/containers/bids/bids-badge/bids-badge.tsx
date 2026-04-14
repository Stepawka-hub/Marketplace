import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { BidsBadgeUI } from "@/components/elements";

export const BidsBadge: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.MY_BIDS);
  };

  return <BidsBadgeUI count={0} onClick={handleClick} />;
};
