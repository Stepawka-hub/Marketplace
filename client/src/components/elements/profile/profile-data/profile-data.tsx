import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getRoleTranslationKey } from "@/shared/helpers";
import { ProfileAvatar } from "@/components/containers";
import { InfoRow } from "@/components/elements";
import { Box, Paper, Typography, Button, Stack } from "@mui/material";
import { editButtonStyle, profileBoxStyle, wrapperStyle } from "./styles";
import { TProfileDataUIProps } from "./type";

export const ProfileDataUI: FC<TProfileDataUIProps> = ({
  firstName = "",
  lastName = "",
  avatar,
  email,
  phone = "",
  role,
  onEditButtonClick,
}) => {
  const { t } = useTranslation();

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
