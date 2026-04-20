import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  formatBalance,
  formattedWithSpace,
  getRoleTranslationKey,
} from "@/shared/helpers";
import { ProfileAvatar } from "@/components/containers";
import { InfoRow } from "@/components/elements";
import { Box, Paper, Typography, Button, Stack } from "@mui/material";
import {
  balanceValueStyle,
  editButtonStyle,
  frozenBalanceValueStyle,
  profileBoxStyle,
  wrapperStyle,
} from "./styles";
import { TProfileDataUIProps } from "./type";

export const ProfileDataUI: FC<TProfileDataUIProps> = ({
  firstName = "",
  lastName = "",
  avatar,
  email,
  phone = "",
  role,
  balance,
  frozenBalance,
  onEditButtonClick,
}) => {
  const { t, i18n } = useTranslation();

  const userRole = t(getRoleTranslationKey(role));

  return (
    <Paper elevation={0} sx={wrapperStyle}>
      <Box sx={profileBoxStyle}>
        <ProfileAvatar
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
        />

        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" fontWeight={500} gutterBottom>
            {firstName} {lastName}
          </Typography>

          <Stack spacing={1} sx={{ mt: 1 }}>
            <InfoRow label={t("profile.info-row.email")} value={email} />
            <InfoRow label={t("profile.info-row.phone")} value={phone} />
            <InfoRow label={t("profile.info-row.role")} value={userRole} />
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

        <Button
          variant="contained"
          sx={editButtonStyle}
          onClick={onEditButtonClick}
        >
          {t("common.actions.edit")}
        </Button>
      </Box>
    </Paper>
  );
};
