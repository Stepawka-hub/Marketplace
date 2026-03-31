import { FC } from "react";
import { FormFieldset, FormTitle } from "@/components/ui";
import { Paper } from "@mui/material";
import { formStyle, formTitleStyle } from "./styles";
import { TFormProps } from './type';

export const Form: FC<TFormProps> = ({ title, children, sx, ...props }) => (
  <Paper component="form" variant="outlined" sx={sx || formStyle} {...props}>
    {title && (
      <FormTitle variant="h2" sx={formTitleStyle}>
        {title}
      </FormTitle>
    )}
    <FormFieldset>{children}</FormFieldset>
  </Paper>
);
