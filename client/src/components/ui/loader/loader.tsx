import { FC } from "react";
import { normalizeSx } from "@/shared/helpers";
import { Box, CircularProgress } from "@mui/material";
import { loaderBoxStyle } from "./styles";
import { TLoaderProps } from "./type";

export const Loader: FC<TLoaderProps> = ({ sx = {} }) => (
  <Box sx={[loaderBoxStyle, ...normalizeSx(sx)]}>
    <CircularProgress />
  </Box>
);
