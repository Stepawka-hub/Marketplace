import { FC } from "react";
import { Paper, IconButton, Box } from "@mui/material";
import { Delete as DeleteIcon, Star as StarIcon } from "@mui/icons-material";
import {
  thumbnailStyle,
  imageStyle,
  deleteButtonStyle,
  mainBadgeStyle,
  starIconStyle,
} from "./styles";
import { TMediaThumbnailProps } from "./type";

export const MediaThumbnail: FC<TMediaThumbnailProps> = ({
  isMain,
  previewUrl,
  mainBadgeLabel,
  onSelect,
  onRemove,
}) => (
  <Paper sx={thumbnailStyle(isMain)} onClick={onSelect}>
    <img
      src={previewUrl}
      style={imageStyle}
      className="thumbnail-image"
      alt="Thumbnail"
    />

    <IconButton
      size="small"
      color="error"
      sx={deleteButtonStyle}
      onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}
    >
      <DeleteIcon fontSize="small" />
    </IconButton>

    {isMain && (
      <Box sx={mainBadgeStyle}>
        <StarIcon sx={starIconStyle} />
        {mainBadgeLabel}
      </Box>
    )}
  </Paper>
);
