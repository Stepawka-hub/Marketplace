import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { FC } from "react";
import { SliderBox, SliderButton, SliderImage } from "./styles";
import { ImageSliderProps } from "./type";

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  currentPosition,
  onImageChange,
  onImageClick,
}) => {
  const isFirst = currentPosition === 0;
  const isLast = currentPosition === images.length - 1;

  const handlePrev = () => {
    if (isFirst) return;
    onImageChange(currentPosition - 1);
  };

  const handleNext = () => {
    if (isLast) return;
    onImageChange(currentPosition + 1);
  };

  return (
    <SliderBox>
      <SliderButton sx={{ left: 15 }} disabled={isFirst} onClick={handlePrev}>
        <ChevronLeftRoundedIcon fontSize="large" />
      </SliderButton>
      <SliderImage
        src={images[currentPosition]}
        alt={`Product thumbnail ${currentPosition}`}
        onClick={onImageClick}
      />
      <SliderButton sx={{ right: 15 }} disabled={isLast} onClick={handleNext}>
        <ChevronRightRoundedIcon fontSize="large" />
      </SliderButton>
    </SliderBox>
  );
};
