import { FC } from "react";
import { CreateLotButtonUI } from "@/components/elements";
import { useDispatch } from "@/store";
import { openLotCreationModal } from "@/store/slices/lot";
import { TCreateLotButtonProps } from "./type";

export const CreateLotButton: FC<TCreateLotButtonProps> = ({
  productId,
  productName,
  productPreview,
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      openLotCreationModal({
        productId,
        productName,
        productPreview,
      }),
    );
  };

  return <CreateLotButtonUI handleAction={handleClick} />;
};
