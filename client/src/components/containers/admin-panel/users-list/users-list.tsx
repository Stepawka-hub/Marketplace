import { FC, useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateUserRolesMutation,
} from "@/services/user";
import { UserRolesModal } from "@/components/containers";
import { UsersListUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { USER_ROLES } from "@/shared/constants";
import { TUserData, TUserRole } from "@/shared/types";
import { TSelectedUser } from "./types";

export const UsersList: FC = () => {
  const { data: users, isLoading, refetch } = useGetAllUsersQuery();
  const [updateRoles] = useUpdateUserRolesMutation();
  const [selectedUser, setSelectedUser] = useState<TSelectedUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditRoles = (user: TUserData) => {
    setSelectedUser({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`.trim() || user.email,
      roles: user.roles,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const handleSaveRoles = async (userId: string, roles: TUserRole[]) => {
    await updateRoles({ userId, roles }).unwrap();
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <UsersListUI
        users={users || []}
        isLoading={isLoading}
        onEditRoles={handleEditRoles}
      />
      {selectedUser && (
        <UserRolesModal
          open={isModalOpen}
          userId={selectedUser.id}
          userName={selectedUser.name}
          currentRoles={selectedUser.roles}
          allRoles={Object.values(USER_ROLES)}
          onClose={handleCloseModal}
          onSave={handleSaveRoles}
        />
      )}
    </>
  );
};
