import { Backdrop } from "@mui/material";
import { FC } from "react";
import { ImagePreviewProps } from "./type";
import { StyledImage } from "./styles";

export const ImagePreview: FC<ImagePreviewProps> = ({
  image,
  isOpen,
  onClose,
}) => (
  <Backdrop
    sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
    open={isOpen}
    onClick={onClose}
  >
    <StyledImage src={image} alt="Preview image" />
  </Backdrop>
);
