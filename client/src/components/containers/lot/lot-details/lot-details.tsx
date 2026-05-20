import { FC } from "react";
import { useGetLotByIdQuery, useGetUserAutoBidQuery } from "@/services";
import { NotFound, LotDetailsUI } from "@/components/elements";
import { Loader } from "@/components/ui";
import { TLotDetailsProps } from "./type";

export const LotDetails: FC<TLotDetailsProps> = ({ lotId }) => {
  const { data: lot, isLoading } = useGetLotByIdQuery(lotId, {
    pollingInterval: 30000,
  });

  const { data: autoBid, isLoading: isFetchAutoBidInfo } =
    useGetUserAutoBidQuery({
      lotId,
    });

  const hasAutoBid = !!autoBid && autoBid.active;

  if (isLoading || isFetchAutoBidInfo) {
    return <Loader />;
  }

  if (!lot) {
    return <NotFound />;
  }

  return <LotDetailsUI lot={lot} hasAutoBid={hasAutoBid} />;
};
