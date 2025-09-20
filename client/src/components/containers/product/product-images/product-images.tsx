import { FC, useState } from "react";
import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import { ProductImagesProps } from "./type";
import { ImageListItem } from "@/components/ui";
import { ImagePreview, ImageSlider } from "@/components/elements";

// Todo: Переписать компонент
export const ProductImages: FC<ProductImagesProps> = ({ images }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const onImageClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const isFirst = position === 0;
  const isLast = position === images.length - 1;

  const handlePrev = () => {
    if (isFirst) return;
    setPosition((p) => p - 1);
  };  

  const handleNext = () => {
    if (isLast) return;
    setPosition((p) => p + 1);
  };

  return (
    <Box component="section">
      <ImageSlider
        images={images}
        currentPosition={position}
        disableNextButton={isFirst}
        disablePrevButton={isLast}
        handlePrev={handlePrev}
        handleNext={handleNext}
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
