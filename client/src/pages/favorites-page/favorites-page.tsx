import { FC } from "react";
import { useTranslation } from "react-i18next";
import { BackButton, FavoritesList } from "@/components/containers";
import { PageContainer } from "@/components/ui";
import { Typography } from "@mui/material";
import { titleStyle } from "./styles";

export const FavoritesPage: FC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <BackButton />
      <Typography variant="h2" sx={titleStyle}>
        {t("favorites.title")}
      </Typography>
      <FavoritesList />
    </PageContainer>
  );
};
