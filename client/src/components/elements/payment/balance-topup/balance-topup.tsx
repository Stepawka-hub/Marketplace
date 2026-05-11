import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import {
  buttonsContainerStyle,
  dialogStyle,
  minAmountHintStyle,
  titleContainerStyle,
  titleIconStyle,
} from "./styles";
import { TBalanceTopupUIProps } from "./types";

export const BalanceTopupUI: FC<TBalanceTopupUIProps> = ({
  isOpen,
  isLoading,
  amount,
  setAmount,
  onSubmit,
  onClose,
}) => {
  const { t } = useTranslation();

  return (
    <Dialog
      open={isOpen}
      maxWidth="xs"
      fullWidth
      sx={dialogStyle}
      onClose={onClose}
    >
      <DialogTitle sx={titleContainerStyle}>
        <AccountBalanceWalletIcon sx={titleIconStyle} />
        {t("payment.balance.topup-title")}
      </DialogTitle>
      <DialogContent>
        <Box sx={buttonsContainerStyle}>
          <TextField
            label={t("payment.balance.amount")}
            type="number"
            value={amount}
            slotProps={{
              htmlInput: {
                min: 100,
                step: 100,
              },
            }}
            fullWidth
            disabled={isLoading}
            autoFocus
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <Typography variant="caption" sx={minAmountHintStyle}>
            {t("payment.balance.min-amount-hint", { min: 100 })}
          </Typography>
          <Button
            variant="contained"
            disabled={isLoading || amount < 100}
            fullWidth
            onClick={onSubmit}
          >
            {isLoading
              ? t("common.actions.processing")
              : t("payment.balance.pay")}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
