import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formatBalance, formattedWithSpace } from "@/shared/helpers";
import { ProfileAvatar } from "@/components/containers";
import { InfoRow } from "@/components/elements";
import {
  Box,
  Paper,
  Typography,
  Stack,
  Chip,
  Tooltip,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  actionsContainerStyle,
  balanceValueStyle,
  editButtonStyle,
  frozenBalanceValueStyle,
  profileBoxStyle,
  rolesContainerStyle,
  topUpButtonStyle,
  userInfoWrapperStyle,
  wrapperStyle,
} from "./styles";
import { TProfileDataUIProps } from "./type";

export const ProfileDataUI: FC<TProfileDataUIProps> = ({
  firstName = "",
  lastName = "",
  avatar,
  email,
  phone = "",
  roles,
  balance,
  frozenBalance,
  onEditButtonClick,
  onTopUpClick,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <Paper elevation={0} sx={wrapperStyle}>
      <Box sx={profileBoxStyle}>
        <ProfileAvatar
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
        />

        <Box sx={userInfoWrapperStyle}>
          <Typography variant="h5" fontWeight={500} gutterBottom>
            {firstName} {lastName}
          </Typography>

          <Box sx={rolesContainerStyle}>
            {roles.map((role) => (
              <Chip key={role} label={t(`common.role.${role}`)} size="small" />
            ))}
          </Box>

          <Stack spacing={1} sx={{ mt: 1 }}>
            <InfoRow label={t("profile.info-row.email")} value={email} />
            <InfoRow label={t("profile.info-row.phone")} value={phone} />
            <InfoRow
              label={t("profile.info-row.balance")}
              value={`${formattedWithSpace(formatBalance(balance), i18n.language)} ₽`}
              valueSx={balanceValueStyle}
            />
            <InfoRow
              label={t("profile.info-row.frozen-balance")}
              value={`${formattedWithSpace(formatBalance(frozenBalance), i18n.language)} ₽`}
              valueSx={frozenBalanceValueStyle}
            />
          </Stack>
        </Box>

        <Box sx={actionsContainerStyle}>
          <Tooltip title={t("payment.balance.topup-title")}>
            <IconButton
              color="success"
              sx={topUpButtonStyle}
              onClick={onTopUpClick}
            >
              <AccountBalanceWalletIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={t("common.actions.edit")}>
            <IconButton sx={editButtonStyle} onClick={onEditButtonClick}>
              <EditIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Paper>
  );
};
