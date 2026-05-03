import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  TableRow,
  TableCell,
  Chip,
  Button,
  Box,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {
  actionsCellStyle,
  balanceValueStyle,
  frozenBalanceValueStyle,
  rolesBoxStyle,
} from "./styles";
import { TUserRowProps } from "./types";
import { formatBalance, formattedWithSpace } from "@/shared/helpers";

export const UserRow: FC<TUserRowProps> = ({ user, onEditRoles }) => {
  const { t, i18n } = useTranslation();
  const {
    firstName,
    lastName,
    email,
    phone,
    roles,
    balance,
    frozenBalance,
    createdAt,
  } = user;
  const formattedBalance = formattedWithSpace(
    formatBalance(balance),
    i18n.language,
  );
  const formattedFrozenBalance = formattedWithSpace(
    formatBalance(frozenBalance),
    i18n.language,
  );
  const formattedCreatedAt = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : "—";

  return (
    <TableRow>
      <TableCell>{`${firstName} ${lastName}`.trim() || "—"}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone || "—"}</TableCell>
      <TableCell>
        <Box sx={rolesBoxStyle}>
          {roles.map((role) => (
            <Chip key={role} label={role} size="small" />
          ))}
        </Box>
      </TableCell>
      <TableCell>
        <Typography sx={balanceValueStyle}>{formattedBalance} ₽</Typography>
      </TableCell>
      <TableCell>
        <Typography sx={frozenBalanceValueStyle}>
          {formattedFrozenBalance} ₽
        </Typography>
      </TableCell>
      <TableCell>{formattedCreatedAt}</TableCell>
      <TableCell sx={actionsCellStyle}>
        <Button
          size="small"
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => onEditRoles(user)}
        >
          {t("users.actions.edit-roles")}
        </Button>
      </TableCell>
    </TableRow>
  );
};
