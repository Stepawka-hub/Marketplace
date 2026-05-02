import { FC } from "react";
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
import { Paper, Typography, useTheme } from "@mui/material";
import { chartPaperStyle, chartTitleStyle } from "./styles";
import { TRegistrationsChartProps } from "./types";

export const RegistrationsChart: FC<TRegistrationsChartProps> = ({ data }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Paper sx={chartPaperStyle}>
      <Typography variant="h6" sx={chartTitleStyle}>
        {t("dashboard.charts.registrations")}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
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
