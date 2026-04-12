import { FC, memo } from "react";
import { ProductSkeletonList, NotFound, LotCard } from "@/components/elements";
import { Box } from "@mui/material";
import { TLotsListUIProps } from "./type";
import { cardContainerStyle } from "./styles";

export const LotsListUI: FC<TLotsListUIProps> = memo(
  ({ lots, isLoading, isShowLikeButton = true, minCardWidth = 300 }) => {
    if (isLoading) {
      return <ProductSkeletonList />;
    }

    if (!lots.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Box sx={cardContainerStyle(minCardWidth)}>
        {lots.map((lot) => (
          <LotCard key={lot.id} lot={lot} isShowLikeButton={isShowLikeButton} />
        ))}
      </Box>
    );
  },
);
