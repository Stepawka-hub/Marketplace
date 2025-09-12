import { FC } from "react";
import { Backdrop } from "@mui/material";
import { ImagePreviewProps } from "./type";
import { backDropStyle } from "./styles";
import { StyledImage } from "@/components/ui";

export const ImagePreview: FC<ImagePreviewProps> = ({
  image,
  isOpen,
  onClose,
}) => (
  <Backdrop open={isOpen} sx={backDropStyle} onClick={onClose}>
    <StyledImage src={image} alt="Preview image" />
  </Backdrop>
);
