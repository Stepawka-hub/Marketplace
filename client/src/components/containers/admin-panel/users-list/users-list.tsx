import { FC, useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateUserRolesMutation,
} from "@/services/user";
import { usePagination } from "@/hooks/usePagination";

import { UserRolesModal } from "@/components/containers";
import { Pagination, UsersListUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { USER_ROLES } from "@/shared/constants";
import { TUserData, TUserRole } from "@/shared/types";
import { TSelectedUser } from "./types";

export const UsersList: FC = () => {
  const { page, limit, defaultPagination, handlePageChange } = usePagination();
  const { data, isLoading, refetch } = useGetAllUsersQuery({
    page,
    limit,
  });
  const [updateRoles] = useUpdateUserRolesMutation();
  const [selectedUser, setSelectedUser] = useState<TSelectedUser | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

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

  const pagination = data?.meta || defaultPagination;

  return (
    <>
      <>
        <UsersListUI
          users={data?.items ?? []}
          isLoading={isLoading}
          onEditRoles={handleEditRoles}
        />
        {data && !!data.items.length && (
          <Pagination
            count={data.meta.totalPages}
            page={pagination.page}
            showFirstButton
            showLastButton
            size="large"
            onChange={handlePageChange}
          />
        )}
      </>
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
