import { BackButton } from "@components/back-button";
import { NotFound } from "@components/not-found";
import { Product } from "@modules/product";
import { Box } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";

export const ProductPage: FC = () => {
  const { productId } = useParams<"productId">();
  if (!productId) return <NotFound />;

  return (
    <Box sx={{ py: 3, px: { xs: 2, sm: 3, lg: 5 } }}>
      <BackButton />
      <Product id={productId} />
    </Box>
  );
};
