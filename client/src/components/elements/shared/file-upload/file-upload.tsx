import { FC } from "react";
import { Button, Box, Typography } from "@mui/material";
import { TFileUploadUIProps } from "./type";
import { helperTextStyle, labelStyle, uploadButtonStyle } from "./styles";

export const FileUploadUI: FC<TFileUploadUIProps> = ({
  fileRef,
  label,
  placeholder,
  accept = "image/*",
  startIcon,
  multiple = false,
  error = false,
  helperText = "",
  handleClick,
  handleChange,
}) => (
  <Box>
    <Typography sx={labelStyle(error)} variant="body2" gutterBottom>
      {label}
    </Typography>
    <Button
      variant="outlined"
      fullWidth
      startIcon={startIcon}
      sx={uploadButtonStyle(error)}
      onClick={handleClick}
    >
      {placeholder || "Upload file"}
    </Button>
    {helperText && (
      <Typography variant="caption" color="error" sx={helperTextStyle}>
        {helperText}
      </Typography>
    )}
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
