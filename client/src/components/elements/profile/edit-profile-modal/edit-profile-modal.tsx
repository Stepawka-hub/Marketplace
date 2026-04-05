import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { modalHeaderContainerStyle, modalInnerWrapperStyle } from "./styles";
import { TEditProfileModalUIProps } from "./types";

export const EditProfileModalUI: FC<TEditProfileModalUIProps> = ({
  isOpen,
  children,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Modal open={isOpen} aria-labelledby="edit-profile-modal" onClose={onClose}>
      <Box sx={modalInnerWrapperStyle}>
        <Box sx={modalHeaderContainerStyle}>
          <Typography variant="h6">{t("profile.edit-modal.title")}</Typography>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
};
