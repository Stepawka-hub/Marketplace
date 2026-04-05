import { FC } from "react";
import { BidCard } from "@/components/elements";
import { Grid } from "@mui/material";
import { gridStyle } from "./styles";
import { TBidsListUIProps } from "./type";

export const BidsListUI: FC<TBidsListUIProps> = ({ items, ...props }) => (
  <Grid container sx={gridStyle}>
    {items.map((bid) => (
      <BidCard key={bid.product.id} bid={bid} {...props} />
    ))}
  </Grid>
);
