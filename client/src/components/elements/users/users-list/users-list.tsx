import { FC } from "react";
import { useTranslation } from "react-i18next";

import { UserRow } from "@/components/elements";
import { Loader } from "@/components/ui";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import {
  containerStyle,
  titleStyle,
  tableContainerStyle,
  tableStyle,
  tableHeadStyle,
} from "./styles";
import { TUsersListUIProps } from "./types";

const TRANSLATION_PREFIX = "users";

export const UsersListUI: FC<TUsersListUIProps> = ({
  users,
  isLoading,
  onEditRoles,
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" sx={titleStyle}>
        {t(`${TRANSLATION_PREFIX}.title`)}
      </Typography>

      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table sx={tableStyle}>
          <TableHead sx={tableHeadStyle}>
            <TableRow>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.name`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.email`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.phone`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.roles`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.balance`)}</TableCell>
              <TableCell>
                {t(`${TRANSLATION_PREFIX}.table.frozen-balance`)}
              </TableCell>
              <TableCell>
                {t(`${TRANSLATION_PREFIX}.table.registered`)}
              </TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {t(`${TRANSLATION_PREFIX}.table.actions`)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} onEditRoles={onEditRoles} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
