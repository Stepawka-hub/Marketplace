import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes";
import { ProfileBadgeUI } from "@/components/elements";
import { useSelector } from "@/store";
import { getIsAuth } from "@/store/slices/profile";
import { Avatar } from "@mui/material";

export const ProfileBadge: FC = () => {
  const isAuth = useSelector(getIsAuth);
  const navigate = useNavigate();

  const handleBadgeClick = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleAvatarClick = () => {
    navigate(ROUTES.PROFILE);
  };

  if (isAuth) {
    return <Avatar onClick={handleAvatarClick} />;
  }

  return <ProfileBadgeUI onClick={handleBadgeClick} />;
};
