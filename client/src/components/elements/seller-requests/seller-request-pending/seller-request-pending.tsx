import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Typography, Box } from "@mui/material";
import PendingIcon from "@mui/icons-material/Pending";
import {
  pendingContainerStyle,
  iconStyle,
  contentStyle,
  pendingIconStyle,
  titleStyle,
  messageStyle,
} from "./styles";

export const SellerRequestPending: FC = () => {
  const { t } = useTranslation();

  return (
    <Paper sx={pendingContainerStyle}>
      <Box sx={iconStyle}>
        <PendingIcon sx={pendingIconStyle} />
      </Box>
      <Box sx={contentStyle}>
        <Typography sx={titleStyle}>
          {t("seller-requests.status.pending")}
        </Typography>
        <Typography sx={messageStyle}>
          {t("seller-requests.pending.message")}
        </Typography>
      </Box>
    </Paper>
  );
};
