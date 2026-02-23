import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCountFavoritesQuery } from "@/services/favorites";
import { FavoritesBadgeUI } from "@/components/elements";
import { ROUTES } from "@/config/routes";

export const FavoritesBadge: FC = () => {
  const { data: count = 0 } = useGetCountFavoritesQuery();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.FAVORITES);
  };

  return <FavoritesBadgeUI count={count} onClick={handleClick} />;
};
