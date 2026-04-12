import { FC } from "react";
import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query";
import { useGetLotByIdQuery } from "@/services";
import { NotFound, LotDetailsUI } from "@/components/elements";
import { Loader } from "@/components/ui";

export const LotDetails: FC = () => {
  const { lotId } = useParams<"lotId">();
  const { data: lot, isLoading } = useGetLotByIdQuery(lotId ?? skipToken);

  if (isLoading) {
    return <Loader />;
  }

  if (!lot || !lotId) {
    return <NotFound />;
  }

  return <LotDetailsUI lot={lot} />;
};
