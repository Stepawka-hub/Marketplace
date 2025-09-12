import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ROUTES } from "@/config/routes";
import { NotFoundProps } from "./type";
import { notFoundBoxStyle, redirectBtnStyle, titleStyle } from "./styles";
import glassImg from "@/assets/images/glass.png";

export const NotFound: FC<NotFoundProps> = ({ label, hideBtn }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirect = () => navigate(ROUTES.CATALOG);

  return (
    <Box sx={notFoundBoxStyle}>
      <img src={glassImg} alt="glass" />
      <Typography variant="h3" sx={titleStyle}>
        {label || t("not-found.label")}
      </Typography>
      {!hideBtn && (
        <Button
          sx={redirectBtnStyle}
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
