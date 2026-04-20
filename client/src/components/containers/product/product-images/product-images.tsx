import { FC, useState } from "react";
import { ImagePreview, ImageSlider } from "@/components/elements";
import { ImageListItem } from "@/components/ui";
import { Box, ImageList, useMediaQuery, useTheme } from "@mui/material";
import { TProductImagesProps } from "./type";

// Todo: Переписать компонент
export const ProductImages: FC<TProductImagesProps> = ({ images }) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isFirst = position === 0;
  const isLast = position === images.length - 1;

  const onImageClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handlePrev = () => {
    if (isFirst) {
      return;
    }
    
    setPosition((p) => p - 1);
  };

  const handleNext = () => {
    if (isLast) {
      return;
    }

    setPosition((p) => p + 1);
  };

  const imageUrls = images.map((i) => i.url);

  return (
    <Box component="section">
      <ImageSlider
        images={imageUrls}
        currentPosition={position}
        disableNextButton={isLast}
        disablePrevButton={isFirst}
        handlePrev={handlePrev}
        handleNext={handleNext}
        onImageClick={onImageClick}
      />

      <ImageList cols={isMedium ? 4 : 5} gap={7}>
        {imageUrls.map((url, idx) => (
          <ImageListItem
            key={idx}
            isSelected={position === idx}
            onClick={() => setPosition(idx)}
          >
            <img src={url} alt={`Product thumbnail ${idx}`} />
          </ImageListItem>
        ))}
      </ImageList>

      <ImagePreview
        image={images[position].url}
        isOpen={isOpen}
        onClose={handleClose}
      />
    </Box>
  );
};
