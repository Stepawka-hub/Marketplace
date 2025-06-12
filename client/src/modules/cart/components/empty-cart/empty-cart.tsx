import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import glassIcon from "@images/glass.png";
import { NavLink } from "react-router-dom";

export const EmptyCart: FC = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ width: "100%", mt: 2, textAlign: "center" }}>
      <img src={glassIcon} alt="Empty" />
      <Typography fontSize="1.5rem" fontWeight="600">
        {t("cart.empty.title")}
      </Typography>
      <Typography fontSize="1.15rem" component="span">
        {`${t("cart.empty.text")} `}
      </Typography>
      <Link
        component={NavLink}
        to="/catalog"
        fontSize="1.15rem"
        underline="hover"
      >
        {t("cart.empty.link")}
      </Link>
    </Box>
  );
};
