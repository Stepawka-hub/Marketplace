import { FC, useEffect, useState } from "react";
import { formatTimeLeft } from "@/shared/helpers";
import { TCountdownTimerProps } from "./types";

export const CountdownTimer: FC<TCountdownTimerProps> = ({ targetDate }) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const updateTimer = () => {
      setFormattedTime(formatTimeLeft(targetDate));
    };

    updateTimer();

    const intervalId = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return <>{formattedTime}</>;
};
