import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useLogoutMutation } from "@/services";
import { Button } from "@mui/material";

export const ProfileMenu: FC = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = () => {
    logout();
  };

  return (
    <aside>
      <nav>
        <NavLink to="" />
        <Button disabled={isLoading} onClick={handleLogout}>
          Logout
        </Button>
      </nav>
    </aside>
  );
};
