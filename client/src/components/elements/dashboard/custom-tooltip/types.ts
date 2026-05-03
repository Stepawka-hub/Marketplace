export type TCustomTooltipProps = {
  active?: boolean;
  payload?: Array<{
    value: number;
    name: string;
    dataKey: string;
    color: string;
    payload: unknown;
  }>;
  label?: string | number;
};
