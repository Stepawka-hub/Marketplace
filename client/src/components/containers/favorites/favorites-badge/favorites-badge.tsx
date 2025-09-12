import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "@/store";
import { getFavoriteTotalItems } from "@/store/slices/favorites";
import { ROUTES } from "@/config/routes";
import { FavoritesBadgeUI } from "@/components/elements";

export const FavoritesBadge: FC = () => {
  const navigate = useNavigate();
  const count = useSelector(getFavoriteTotalItems);

  const handleClick = () => {
    navigate(ROUTES.FAVORITES);
  };

  return <FavoritesBadgeUI count={count} onClick={handleClick} />;
};
