import { FC, useState } from "react";
import { useGetMeQuery } from "@/services/user";
import { EditProfileModal } from "@/components/containers";
import { ProfileDataUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Typography } from "@mui/material";

export const ProfileData: FC = () => {
  const { data, isLoading, refetch } = useGetMeQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <Typography>Ошибка загрузки профиля</Typography>;
  }

  const { firstName, lastName, avatar, email, phone, role } = data;

  const openEditProfileModal = () => {
    setIsModalOpen(true);
  };

  const closeEditProfileModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ProfileDataUI
        firstName={firstName}
        lastName={lastName}
        avatar={avatar}
        email={email}
        phone={phone}
        role={role}
        onEditButtonClick={openEditProfileModal}
      />
      <EditProfileModal
        isOpen={isModalOpen}
        userData={data}
        onClose={closeEditProfileModal}
        onSuccess={refetch}
      />
    </>
  );
};
