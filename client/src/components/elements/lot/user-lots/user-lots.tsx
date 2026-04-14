import { FC, memo } from "react";
import { NotFound, CompactLotCard } from "@/components/elements";
import { Loader } from "@/components/ui";
import { Box } from "@mui/material";
import { lotsContainer } from "./styles";
import { TUserLotsUIProps } from "./type";

export const UserLotsUI: FC<TUserLotsUIProps> = memo(({ lots, isLoading }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (!lots.length) {
    return <NotFound hideBtn />;
  }

  return (
    <Box sx={lotsContainer}>
      {lots.map((lot) => (
        <CompactLotCard key={lot.id} lot={lot} />
      ))}
    </Box>
  );
});
