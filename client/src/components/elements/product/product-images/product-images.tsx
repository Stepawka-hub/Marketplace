import { FC, useState } from "react";
import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import { ProductImagesProps } from "./type";
import { ImageSlider } from "@/components/ui/image-slider";
import { ImageListItem } from "@/components/ui";
import { ImagePreview } from "@/components/elements";

export const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onImageChange = (position: number) => setPosition(position);
  const onImageClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box component="section">
      <ImageSlider
        images={images}
        currentPosition={position}
        onImageChange={onImageChange}
        onImageClick={onImageClick}
      />

      <ImageList cols={isMedium ? 4 : 7} gap={7}>
        {images.map((image, index) => (
          <ImageListItem
            key={index}
            isSelected={position === index}
            onClick={() => setPosition(index)}
          >
            <img src={image} alt={`Product thumbnail ${index}`} />
          </ImageListItem>
        ))}
      </ImageList>

      <ImagePreview
        image={images[position]}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </Box>
  );
};
