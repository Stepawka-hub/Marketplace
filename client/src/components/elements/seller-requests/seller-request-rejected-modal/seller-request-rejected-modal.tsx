import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "@/components/elements";
import { Box, Typography, Button } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import {
  contentBoxStyle,
  iconBoxStyle,
  actionsStyle,
  rejectedReason,
  errorIconStyle,
} from "./styles";
import { TSellerRequestRejectedModalProps } from "./types";

export const SellerRequestRejectedModal: FC<
  TSellerRequestRejectedModalProps
> = ({ open, rejectionReason, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal isOpen={open} onClose={onClose}>
      <Box sx={iconBoxStyle}>
        <ErrorIcon sx={errorIconStyle} />
      </Box>
      <Box sx={contentBoxStyle}>
        <Typography variant="h6" gutterBottom>
          {t("seller-requests.rejected.title")}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("seller-requests.rejected.message")}
        </Typography>
        {rejectionReason && (
          <Typography variant="body2" sx={rejectedReason}>
            <strong>{t("seller-requests.rejected.reason")}:</strong>{" "}
            {rejectionReason}
          </Typography>
        )}
        <Box sx={actionsStyle}>
          <Button variant="contained" onClick={onClose}>
            {t("common.actions.ok")}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
