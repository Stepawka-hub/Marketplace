import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CartList } from "../cart-list";
import { CartSummary } from "../cart-summary";

export const Cart: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => navigate("/catalog");

  return (
    <Box sx={{ py: 3, px: 5 }}>
      <Tooltip title={t('cart.back-btn')}>
        <IconButton
          aria-label="Вернуться в каталог"
          sx={{ mb: 2, backgroundColor: "custom.primary", border: "1px solid" }}
          onClick={handleClick}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Tooltip>
      <Typography variant="h2" fontSize="2rem" fontWeight="600">
        {t("cart.title")}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
          <CartList />
        </Grid>
        <Grid flexGrow={1}>
          <CartSummary />
        </Grid>
      </Grid>
    </Box>
  );
};
