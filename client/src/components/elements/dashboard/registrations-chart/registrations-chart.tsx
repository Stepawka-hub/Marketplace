import { FC, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "../custom-tooltip";
import {
  Box,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";
import { REGISTRATION_PERIOD } from "@/shared/constants";
import { chartHeaderStyle, chartPaperStyle, chartTitleStyle } from "./styles";
import { TRegistrationsChartProps } from "./types";
import { TRegistrationPeriod } from "@/shared/types";

export const RegistrationsChart: FC<TRegistrationsChartProps> = ({
  data,
  currentPeriod,
  onPeriodChange,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const handlePeriodChange = (
    _event: MouseEvent<HTMLElement>,
    newPeriod: TRegistrationPeriod | null,
  ) => {
    if (newPeriod !== null) {
      onPeriodChange(newPeriod);
    }
  };

  return (
    <Paper sx={chartPaperStyle}>
      <Box sx={chartHeaderStyle}>
        <Typography variant="h6" sx={chartTitleStyle}>
          {t("dashboard.charts.registrations", { count: currentPeriod })}
        </Typography>
        <ToggleButtonGroup
          value={currentPeriod}
          exclusive
          size="small"
          onChange={handlePeriodChange}
        >
          {Object.entries(REGISTRATION_PERIOD).map(([key, value]) => (
            <ToggleButton key={key} value={value}>
              {`${value} ${t("dashboard.days")}`}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="none" stroke="none" />
          <XAxis dataKey="date" />
          <YAxis
            allowDecimals={false}
            domain={[0, "dataMax + 1"]}
            tickCount={5}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="count"
            stroke={theme.palette.primary.main}
            strokeWidth={2}
            dot={{ fill: theme.palette.primary.main, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};
