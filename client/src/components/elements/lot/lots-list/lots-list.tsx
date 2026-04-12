import { FC, memo } from "react";
import {
  ProductSkeletonList,
  NotFound,
  ProductCard,
} from "@/components/elements";
import { Box } from "@mui/material";
import { TLotsListUIProps } from "./type";
import { cardContainerStyle } from "./styles";

export const LotsListUI: FC<TLotsListUIProps> = memo(
  ({ lots, isLoading, isShowLikeButton = false, minCardWidth = 300 }) => {
    if (isLoading) {
      return <ProductSkeletonList />;
    }

    if (!lots.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Box sx={cardContainerStyle(minCardWidth)}>
        {lots.map(({ id, product }) => (
          <ProductCard
            key={id}
            product={product}
            isShowLikeButton={isShowLikeButton}
          />
        ))}
      </Box>
    );
  },
);
