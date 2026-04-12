import { FC } from "react";
import { Modal as BaseModal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { modalHeaderContainerStyle, modalInnerWrapperStyle } from "./styles";
import { TModalProps } from "./types";

export const Modal: FC<TModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  return (
    <BaseModal open={isOpen} onClose={onClose}>
      <Box sx={modalInnerWrapperStyle}>
        <Box sx={modalHeaderContainerStyle}>
          <Typography variant="h6">{title}</Typography>
          <IconButton size="small" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </BaseModal>
  );
};
