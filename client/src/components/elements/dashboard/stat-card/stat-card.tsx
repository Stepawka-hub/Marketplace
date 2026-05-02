import { FC } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  useTheme,
} from "@mui/material";
import { cardStyle, cardContentStyle, avatarStyle, trendStyle } from "./styles";
import { TStatCardProps } from "./types";

export const StatCard: FC<TStatCardProps> = ({
  title,
  value,
  icon,
  color = "primary",
  trend,
}) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h3" fontWeight="bold">
            {value}
          </Typography>
          {trend && (
            <Typography variant="caption" sx={trendStyle(trend.direction)}>
              {trend.direction === "up" ? "+" : "-"}
              {trend.value}%
            </Typography>
          )}
        </Box>
        <Avatar sx={avatarStyle(color, isDark)}>{icon}</Avatar>
      </CardContent>
    </Card>
  );
};
