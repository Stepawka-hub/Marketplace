import { ChangeEvent, FC } from "react";
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
  minValue,
  setAmount,
  onSubmit,
  onClose,
}) => {
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    setAmount(rawValue);
  };

  const handleBlur = () => {
    const amountNum = parseInt(amount, 10);

    if (amount === "" || isNaN(amountNum) || amountNum < minValue) {
      setAmount(minValue.toString());
    }
  };

  const isDisabled = isLoading || parseInt(amount, 10) < minValue;

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
            type="text"
            value={amount}
            slotProps={{
              htmlInput: {
                min: minValue,
                pattern: "[0-9]*",
              },
            }}
            fullWidth
            disabled={isLoading}
            autoFocus
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <Typography variant="caption" sx={minAmountHintStyle}>
            {t("payment.balance.min-amount-hint", { min: minValue })}
          </Typography>
          <Button
            fullWidth
            variant="contained"
            color="success"
            disabled={isDisabled}
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
