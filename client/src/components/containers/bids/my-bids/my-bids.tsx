import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useGetCartCountQuery } from "@/services/cart";
import { BidsList, BidsSummary } from "@/components/containers";
import { NoBids } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Box, Grid, Typography } from "@mui/material";
import { gridContainerStyle, titleStyle } from "./styles";

export const MyBids: FC = () => {
  const { t } = useTranslation();
  const { data: totalItems = 0, isLoading } = useGetCartCountQuery();

  if (isLoading) {
    return <Loader />;
  }

  const containerContent =
    totalItems > 0 ? (
      <>
        <Grid size={{ xs: 12, sm: 12, md: 12, lg: 8 }}>
          <BidsList />
        </Grid>
        <Grid flexGrow={1}>
          <BidsSummary />
        </Grid>
      </>
    ) : (
      <NoBids />
    );

  return (
    <Box>
      <Typography variant="h2" sx={titleStyle}>
        {t("bids.title")}
      </Typography>

      <Grid container sx={gridContainerStyle}>
        {containerContent}
      </Grid>
    </Box>
  );
};
