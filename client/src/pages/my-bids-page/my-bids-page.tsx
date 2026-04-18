import { FC } from "react";
import { useTranslation } from "react-i18next";
import { BackButton, ActiveBidLotsList } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Typography } from "@mui/material";
import { titleStyle } from "./styles";

export const MyBidsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <BackButton />
      <Typography sx={titleStyle}>{t("bids.title")}</Typography>
      <ActiveBidLotsList />
    </PageContainer>
  );
};
