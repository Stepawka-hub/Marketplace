import { FC, useRef } from "react";
import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  avatarContainerStyle,
  avatarStyle,
  cameraButtonStyle,
  loaderStyle,
} from "./styles";
import { TProfileAvatarUIProps } from "./type";

export const ProfileAvatarUI: FC<TProfileAvatarUIProps> = ({
  avatar,
  initials = "U",
  acceptedTypes = "image/jpeg,image/png,image/webp",
  isLoading,
  error,
  handleFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Box sx={avatarContainerStyle}>
      <Avatar src={avatar} sx={avatarStyle}>
        {!avatar && initials}
      </Avatar>

      {isLoading && <CircularProgress size={32} sx={loaderStyle} />}

      <Tooltip title="Изменить фото">
        <IconButton
          size="small"
          sx={cameraButtonStyle}
          disabled={isLoading}
          onClick={handleClick}
        >
          <CameraAltIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <input
        type="file"
        ref={fileInputRef}
        accept={acceptedTypes}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      {error && (
        <Tooltip title={error} open>
          <span />
        </Tooltip>
      )}
    </Box>
  );
};
