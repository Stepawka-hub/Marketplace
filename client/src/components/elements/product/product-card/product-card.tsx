import { FC } from "react";
import { CreateLotButton } from "@/components/containers";
import { BaseProductCard } from "@/components/elements";
import { TProductCardProps } from "./type";

export const ProductCard: FC<TProductCardProps> = ({
  product,
  isShowCreateLotButton = false,
}) => {
  const { id, name, shortDescription, preview, seller } = product;

  const actions = (
    <>
      {isShowCreateLotButton && (
        <CreateLotButton
          productId={id}
          productName={name}
          productPreview={preview}
        />
      )}
    </>
  );

  return (
    <BaseProductCard
      name={name}
      shortDescription={shortDescription}
      preview={preview}
      seller={seller}
      actions={actions}
    />
  );
};
