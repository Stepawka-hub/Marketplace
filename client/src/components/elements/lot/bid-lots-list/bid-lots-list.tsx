import { FC, memo } from "react";
import { NotFound, BidLotCard } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Box } from "@mui/material";
import { containerStyle } from "./styles";
import { TBidLotsListUIProps } from "./type";

export const BidLotsListUI: FC<TBidLotsListUIProps> = memo(
  ({ lots, isLoading }) => {
    if (isLoading) {
      return <Loader />;
    }

    if (!lots.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Box sx={containerStyle}>
        {lots.map((lot) => (
          <BidLotCard key={lot.id} lot={lot} />
        ))}
      </Box>
    );
  },
);
