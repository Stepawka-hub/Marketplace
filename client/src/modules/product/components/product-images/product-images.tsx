import { Backdrop, Box, ImageList } from "@mui/material";
import { ImageListItem } from "@ui/image-list-item";
import { ImageSlider } from "@ui/image-slider";
import { FC, useState } from "react";
import { ProductImagesProps } from "./type";

export const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);

  const onImageChange = (position: number) => setPosition(position);
  const onImageClick = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box component="section">
      <ImageSlider
        images={images}
        currentPosition={position}
        onImageChange={onImageChange}
        onImageClick={onImageClick}
      />

      <ImageList cols={7} gap={10}>
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

      <Backdrop
        sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <img src={images[position]} alt="Preview image" />
      </Backdrop>
    </Box>
  );
};
