import { FC } from "react";
import { Button, Box, Typography } from "@mui/material";
import { TFileUploadUIProps } from "./type";
import { labelStyle } from "./styles";

export const FileUploadUI: FC<TFileUploadUIProps> = ({
  fileRef,
  label,
  placeholder,
  accept = "image/*",
  startIcon,
  multiple = false,
  handleClick,
  handleChange,
}) => (
  <Box>
    <Typography sx={labelStyle} variant="body2" gutterBottom>
      {label}
    </Typography>
    <Button
      variant="outlined"
      fullWidth
      startIcon={startIcon}
      onClick={handleClick}
    >
      {placeholder || "Upload file"}
    </Button>
    <input
      type="file"
      ref={fileRef}
      accept={accept}
      multiple={multiple}
      style={{ display: "none" }}
      onChange={handleChange}
    />
  </Box>
);
