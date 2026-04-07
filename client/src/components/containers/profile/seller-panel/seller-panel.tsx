import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useGetMeQuery } from "@/services";
import { isVendor } from "@/shared/helpers";
import { USER_ROLES } from "@/shared/constants";
import { ROUTES } from "@/config/routes";

import { SellerRegistrationForm } from "@/components/containers";
import { SellerPanelUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Button } from "@mui/material";

export const SellerPanel: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMeQuery();
  const isSeller = isVendor(data?.role || USER_ROLES.USER);

  if (isLoading) {
    return <Loader />;
  }

  if (!isSeller) {
    return <SellerRegistrationForm />;
  }

  const handleClick = () => {
    navigate(ROUTES.CREATE_PRODUCT);
  };

  return (
    <SellerPanelUI
      headerElement={
        <Button color="success" variant="contained" onClick={handleClick}>
          {t("profile.seller-panel.create-product")}
        </Button>
      }
    />
  );
};
