import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import { customTooltipStyle } from "./styles";
import { TCustomTooltipProps } from "./types";

export const CustomTooltip = ({
  active,
  payload,
  label,
}: TCustomTooltipProps) => {
  const { t } = useTranslation();

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <Box sx={customTooltipStyle}>
      <Typography variant="body2" fontWeight="bold">
        {t("dashboard.charts.date")}: {label || "—"}
      </Typography>
      <Typography variant="body2" color="primary.main">
        {payload[0]?.value || 0} {t("dashboard.charts.registrations-count")}
      </Typography>
    </Box>
  );
};
