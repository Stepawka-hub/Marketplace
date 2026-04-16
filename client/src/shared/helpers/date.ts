import { intervalToDuration, isBefore } from "date-fns";

export const formatTimeLeft = (endTime: string): string => {
  const end = new Date(endTime);
  const now = new Date();

  if (isBefore(end, now)) {
    return "Завершён";
  }

  const duration = intervalToDuration({ start: now, end });
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = duration;

  const formatNumber = (num: number): string => num.toString().padStart(2, "0");

  if (days > 0) {
    return `${days}д ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  }

  return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
};
