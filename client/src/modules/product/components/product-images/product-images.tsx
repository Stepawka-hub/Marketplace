import { Box, ImageList } from "@mui/material";
import { ImageListItem } from "@ui/image-list-item";
import { ImageSlider } from "@ui/image-slider";
import { FC, useCallback, useState } from "react";
import { ProductImagesProps } from "./type";

export const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const [position, setPosition] = useState(0);

  const onImageChange = useCallback((position: number) => {
    setPosition(position);
  }, []);

  const onImageClick = useCallback(() => null, []);

  return (
    <Box component="section">
      <ImageSlider
        images={images}
        currentPosition={position}
        onImageChange={onImageChange}
        onImageClick={onImageClick}
      />

      <ImageList cols={6} gap={10}>
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
    </Box>
  );
};
