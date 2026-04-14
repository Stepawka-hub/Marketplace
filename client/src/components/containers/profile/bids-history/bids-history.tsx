import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { UserLots } from "@/components/containers";
import { titleStyle } from "./styles";

export const BidsHistory: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography sx={titleStyle}>{t("profile.bids-history.title")}</Typography>
      <UserLots />
    </>
  );
};
