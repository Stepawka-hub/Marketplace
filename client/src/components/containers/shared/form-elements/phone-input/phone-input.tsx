import { TextField } from "@mui/material";
import { FC } from "react";
import { useController, useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";
import { InputProps } from "./type";

export const PhoneInput: FC<InputProps> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const { field, fieldState } = useController({
    name,
    control,
  });

  return <div>Numeric</div>;

  // return (
  //   <NumericFormat
  //     {...props}
  //     name={name}
  //     value={field.value || ""}
  //     onChange={field.onChange}
  //     error={fieldState.invalid}
  //     helperText={fieldState.error?.message}
  //     customInput={TextField}
  //   />
  // );
};
