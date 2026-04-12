import { FC, memo } from "react";
import { Box } from "@mui/material";
import { TProductListUIProps } from "./type";
import {
  NotFound,
  ProductCard,
  ProductSkeletonList,
} from "@/components/elements";
import { cardContainerStyle } from "./styles";

export const ProductListUI: FC<TProductListUIProps> = memo(
  ({
    products,
    isLoading,
    isShowCreateLotButton = true,
    minCardWidth = 300,
  }) => {
    if (isLoading) {
      return <ProductSkeletonList />;
    }

    if (!products.length) {
      return <NotFound hideBtn />;
    }

    return (
      <Box sx={cardContainerStyle(minCardWidth)}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            isShowCreateLotButton={isShowCreateLotButton}
          />
        ))}
      </Box>
    );
  },
);
