import { SelectProps } from "@mui/material";

export type TSelectOption = {
  value: string | number;
  label: string;
};

export type TSelectProps = Omit<SelectProps, "name"> & {
  name: string;
  label: string;
  options: TSelectOption[];
};
