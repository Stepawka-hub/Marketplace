import glassImg from "@images/glass.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { NotFoundProps } from "./type";

export const NotFound: FC<NotFoundProps> = ({ label, hideBtn }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirect = () => navigate("/catalog");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        alignItems: "center",
        mt: 3,
      }}
    >
      <img src={glassImg} alt="glass" />
      <Typography variant="h3" sx={{ mt: 1, fontSize: "1.35rem" }}>
        {label || t("not-found.label")}
      </Typography>
      {!hideBtn && (
        <Button
          sx={{ py: 0.75, px: 1.5 }}
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={redirect}
        >
          {t("not-found.btn-label")}
        </Button>
      )}
    </Box>
  );
};
