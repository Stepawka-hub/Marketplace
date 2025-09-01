import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Link, Typography } from "@mui/material";
import { containerStyle, linkStyle, textStyle, titleStyle } from "./styles";
import glassIcon from "@/assets/images/glass.png";

export const EmptyCart: FC = () => {
  const { t } = useTranslation();

  return (
    <Box sx={containerStyle}>
      <img src={glassIcon} alt="Empty cart" />
      <Typography sx={titleStyle}>{t("cart.empty.title")}</Typography>
      <Typography component="span" sx={textStyle}>
        {`${t("cart.empty.text")} `}
      </Typography>
      <Link component={NavLink} to="/catalog" sx={linkStyle}>
        {t("cart.empty.link")}
      </Link>
    </Box>
  );
};
