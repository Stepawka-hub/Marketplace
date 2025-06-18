import { Paper } from "@mui/material";
import { FormFieldset } from "@ui/form/form-fieldset/fieldset";
import { FC } from "react";
import { FormProps } from "react-router-dom";
import { FormTitle } from "./form-title";

export const Form: FC<FormProps> = ({ title, children }) => (
  <Paper
    component="form"
    variant="outlined"
    sx={{ p: 2, borderRadius: "1rem" }}
  >
    {title && <FormTitle variant="h2">{title}</FormTitle>}
    <FormFieldset>{children}</FormFieldset>
  </Paper>
);
