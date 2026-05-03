import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Paper, Typography } from "@mui/material";
import { blue, green, orange } from "@mui/material/colors";
import { chartPaperStyle, chartTitleStyle } from "./styles";
import { TLotsDistributionChartProps } from "./types";

const COLORS = {
  active: green[500],
  completed: blue[500],
  expired: orange[500],
};

export const LotsDistributionChart: FC<TLotsDistributionChartProps> = ({
  data,
}) => {
  const { t } = useTranslation();

  const pieData = [
    {
      name: t("dashboard.lots.active"),
      value: data.active,
      color: COLORS.active,
    },
    {
      name: t("dashboard.lots.completed"),
      value: data.completed,
      color: COLORS.completed,
    },
    {
      name: t("dashboard.lots.expired"),
      value: data.expired,
      color: COLORS.expired,
    },
  ];

  return (
    <Paper sx={chartPaperStyle}>
      <Typography variant="h6" sx={chartTitleStyle}>
        {t("dashboard.charts.lots-distribution")}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) =>
              `${name}: ${((percent || 0) * 100).toFixed(0)}%`
            }
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};
