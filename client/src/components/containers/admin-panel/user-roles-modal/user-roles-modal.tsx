// components/containers/UserRolesModal/UserRolesModal.tsx
import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {
  contentBoxStyle,
  paperStyle,
  roleItemStyle,
  rolesListStyle,
} from "./styles";
import { TUserRole } from "@/shared/types";
import { TUserRolesModalProps } from "./types";

export const UserRolesModal: FC<TUserRolesModalProps> = ({
  open,
  userId,
  userName,
  currentRoles,
  allRoles,
  onClose,
  onSave,
}) => {
  const { t } = useTranslation();
  const [availableRoles, setAvailableRoles] = useState<TUserRole[]>([]);
  const [userRoles, setUserRoles] = useState<TUserRole[]>([]);

  useEffect(() => {
    if (open) {
      setUserRoles([...currentRoles]);
      setAvailableRoles(
        allRoles.filter((role) => !currentRoles.includes(role)),
      );
    }
  }, [open, currentRoles, allRoles]);

  const handleAddRole = (role: TUserRole) => {
    setAvailableRoles(availableRoles.filter((r) => r !== role));
    setUserRoles([...userRoles, role]);
  };

  const handleRemoveRole = (role: TUserRole) => {
    setUserRoles(userRoles.filter((r) => r !== role));
    setAvailableRoles([...availableRoles, role]);
  };

  const handleSave = () => {
    onSave(userId, userRoles);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        {t("users.roles-modal.title")} — {userName}
      </DialogTitle>
      <DialogContent>
        <Box sx={contentBoxStyle}>
          <Paper sx={paperStyle}>
            <Typography variant="subtitle1" gutterBottom>
              {t("users.roles-modal.available")}
            </Typography>
            <Box sx={rolesListStyle}>
              {availableRoles.map((role) => (
                <Box key={role} sx={roleItemStyle}>
                  <Typography>{role}</Typography>
                  <IconButton size="small" onClick={() => handleAddRole(role)}>
                    <ArrowRightIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Paper>

          <Paper sx={paperStyle}>
            <Typography variant="subtitle1" gutterBottom>
              {t("users.roles-modal.user-roles")}
            </Typography>
            <Box sx={rolesListStyle}>
              {userRoles.map((role) => (
                <Box key={role} sx={roleItemStyle}>
                  <Typography>{role}</Typography>
                  <IconButton
                    size="small"
                    onClick={() => handleRemoveRole(role)}
                  >
                    <ArrowLeftIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{t("common.cancel")}</Button>
        <Button onClick={handleSave} variant="contained">
          {t("common.save")}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
