import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { FavoritesBadgeUI } from "@/components/elements";

export const FavoritesBadge: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.FAVORITES);
  };

  // Todo: исправить количество избранных предметов
  return <FavoritesBadgeUI count={0} onClick={handleClick} />;
};
