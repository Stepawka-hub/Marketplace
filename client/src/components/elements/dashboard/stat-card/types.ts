import { ReactNode } from 'react';

export type TStatCardProps = {
  title: string;
  value: number;
  icon: ReactNode;
  color?: "primary" | "warning" | "success" | "error";
  trend?: {
    value: number;
    direction: "up" | "down";
  };
};