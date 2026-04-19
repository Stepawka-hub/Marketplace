import { FC } from "react";
import { useGetLotByIdQuery } from "@/services";
import { NotFound, LotDetailsUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { TLotDetailsProps } from "./type";

export const LotDetails: FC<TLotDetailsProps> = ({ lotId }) => {
  const { data: lot, isLoading } = useGetLotByIdQuery(lotId);

  if (isLoading) {
    return <Loader />;
  }

  if (!lot) {
    return <NotFound />;
  }

  return <LotDetailsUI lot={lot} />;
};
