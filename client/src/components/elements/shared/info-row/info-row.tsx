import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { containerStyle, labelStyle } from "./styles";
import { TInfoRowProps } from "./type";

export const InfoRow: FC<TInfoRowProps> = ({ label, value }) => (
  <Box sx={containerStyle}>
    <Typography variant="body2" color="text.secondary" sx={labelStyle}>
      {label}
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);
