import { FC } from "react";
import { useTranslation } from "react-i18next";
import { BidCard, NotFound } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Box } from "@mui/material";
import { bidsGridStyle } from "./styles";
import { TBidsListUIProps } from "./type";

export const BidsListUI: FC<TBidsListUIProps> = ({ items, isLoading }) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  if (!items.length) {
    return <NotFound label={t("bids.list.no-items-label")} hideBtn />;
  }

  return (
    <Box sx={bidsGridStyle}>
      {items.map((bid) => (
        <BidCard key={bid.id} bid={bid} />
      ))}
    </Box>
  );
};
