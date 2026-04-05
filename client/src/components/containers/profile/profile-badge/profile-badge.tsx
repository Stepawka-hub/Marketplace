import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { ProfileBadgeUI } from "@/components/elements";

export const ProfileBadge: FC = () => {
  const navigate = useNavigate();

  const handleBadgeClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return <ProfileBadgeUI onClick={handleBadgeClick} />;
};
