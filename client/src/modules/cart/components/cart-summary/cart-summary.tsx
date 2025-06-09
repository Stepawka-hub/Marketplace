import {
  getTotalCount,
  getTotalPrice,
} from "@modules/cart/services/slices/cart";
import { Box, Button, Typography } from "@mui/material";
import { formattedWithSpace } from "@shared/helpers/numbers";
import { useSelector } from "@store";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const CartSummary: FC = () => {
  const { t } = useTranslation();
  const totalCount = useSelector(getTotalCount);
  const totalPrice = useSelector(getTotalPrice);
  const formattedPrice = formattedWithSpace(totalPrice);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: "custom.primary",
      }}
    >
      <Typography variant="h3" fontSize="1.5rem" fontWeight="600">
        {t("cart.summary.information")}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize="1.1rem">
          {t("cart.summary.products", { count: totalCount })}
        </Typography>
        <Typography fontSize="1.1rem">{`${formattedPrice} ₽`}</Typography>
      </Box>
      <Button
        variant="contained"
        sx={{ textTransform: "none", fontSize: "1.15rem", fontWeight: 500 }}
      >
        {t("cart.summary.checkout")}
      </Button>
    </Box>
  );
};
