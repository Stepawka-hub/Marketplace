import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";
import { submitButtonStyle } from "./styles";

export const SubmitButton: FC<ButtonProps> = (props) => (
  <Button type="submit" variant="contained" sx={submitButtonStyle} {...props} />
);
