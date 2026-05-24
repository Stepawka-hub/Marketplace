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
import GavelIcon from "@mui/icons-material/Gavel";
import {
  buttonsContainerStyle,
  dialogStyle,
  minAmountHintStyle,
  titleContainerStyle,
  titleIconStyle,
} from "./styles";
import { TPlaceBidModalUIProps } from "./types";

export const PlaceBidModalUI: FC<TPlaceBidModalUIProps> = ({
  isOpen,
  isLoading,
  amount,
  minAllowedBid,
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

    if (amount === "" || isNaN(amountNum) || amountNum < minAllowedBid) {
      setAmount(minAllowedBid.toString());
    }
  };

  const isDisabled = isLoading || parseInt(amount, 10) < minAllowedBid;

  return (
    <Dialog
      open={isOpen}
      maxWidth="xs"
      fullWidth
      sx={dialogStyle}
      onClose={onClose}
    >
      <DialogTitle sx={titleContainerStyle}>
        <GavelIcon sx={titleIconStyle} />
        {t("bids.modal.title")}
      </DialogTitle>
      <DialogContent>
        <Box sx={buttonsContainerStyle}>
          <TextField
            label={t("bids.modal.amount")}
            type="text"
            value={amount}
            slotProps={{
              htmlInput: {
                min: minAllowedBid,
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
            {t("bids.modal.min-amount-hint", { min: minAllowedBid })}
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
              : t("bids.modal.submit")}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
