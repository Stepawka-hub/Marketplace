import { FC } from "react";
import { BidCard } from "@/components/elements";
import { Box } from "@mui/material";
import { bidsGridStyle } from "./styles";
import { TBidsListUIProps } from "./type";

export const BidsListUI: FC<TBidsListUIProps> = ({ items }) => (
  <Box sx={bidsGridStyle}>
    {items.map((bid) => (
      <BidCard key={bid.id} bid={bid} />
    ))}
  </Box>
);
