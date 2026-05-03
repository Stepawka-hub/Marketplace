import { FC } from "react";
import { useTranslation } from "react-i18next";
import { UserAvatar } from "@/components/elements";
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
  actionsBoxStyle,
  balanceValueStyle,
  frozenBalanceValueStyle,
  rolesBoxStyle,
  userInfoStyle,
} from "./styles";
import { TUserRowProps } from "./types";
import { formatBalance, formattedWithSpace } from "@/shared/helpers";

export const UserRow: FC<TUserRowProps> = ({ user, onEditRoles }) => {
  const { t, i18n } = useTranslation();
  const {
    firstName,
    lastName,
    avatar,
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
      <TableCell sx={userInfoStyle}>
        <UserAvatar firstName={firstName} lastName={lastName} avatar={avatar} />
        {`${firstName} ${lastName}`.trim() || "—"}
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone || "—"}</TableCell>
      <TableCell>
        <Box sx={rolesBoxStyle}>
          {roles.map((role) => (
            <Chip key={role} label={t(`common.role.${role}`)} size="small" />
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
      <TableCell>
        <Box sx={actionsBoxStyle}>
          <Button
            size="small"
            variant="contained"
            startIcon={<EditIcon />}
            sx={{ flexShrink: 0 }}
            onClick={() => onEditRoles(user)}
          >
            {t("users.actions.edit-roles")}
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
};
