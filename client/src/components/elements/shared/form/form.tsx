import { FC } from "react";
import { FormProps } from "react-router-dom";
import { Paper } from "@mui/material";
import { FormFieldset, FormTitle } from "@/components/ui";
import { formStyle } from "./styles";

export const Form: FC<FormProps> = ({ title, children, ...props }) => (
  <Paper component="form" variant="outlined" sx={formStyle} {...props}>
    {title && <FormTitle variant="h2">{title}</FormTitle>}
    <FormFieldset>{children}</FormFieldset>
  </Paper>
);
