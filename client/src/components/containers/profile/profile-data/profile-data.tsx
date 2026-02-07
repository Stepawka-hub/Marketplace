import { FC } from "react";
import { useGetMeQuery } from "@/services";
import { Typography } from "@mui/material";

export const ProfileData: FC = () => {
  const { data } = useGetMeQuery();

  return <Typography>{`${data?.firstName} ${data?.lastName}`}</Typography>;
};
