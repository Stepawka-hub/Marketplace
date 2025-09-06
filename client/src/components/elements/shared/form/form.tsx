import { FC } from "react";
import { FormProps } from "react-router-dom";
import { Paper } from "@mui/material";
import { FormFieldset, FormTitle } from "@/components/ui";

export const Form: FC<FormProps> = ({ title, children, ...props }) => (
  <Paper
    component="form"
    variant="outlined"
    sx={{ p: 2, borderRadius: "1rem", backgroundColor: "custom.primary" }}
    {...props}
  >
    {title && <FormTitle variant="h2">{title}</FormTitle>}
    <FormFieldset>{children}</FormFieldset>
  </Paper>
);
