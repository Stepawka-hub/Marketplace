import { FC } from "react";
import { TImageSliderProps } from "./types";
import { SliderBox, SliderButton, SliderImage } from "@/components/ui";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { leftBtnStyle, rightBtnStyle } from "./styles";

export const ImageSlider: FC<TImageSliderProps> = ({
  images,
  currentPosition,
  disablePrevButton,
  disableNextButton,
  handlePrev,
  handleNext,
  onImageClick,
}) => (
  <SliderBox>
    <SliderButton
      disabled={disablePrevButton}
      sx={leftBtnStyle}
      onClick={handlePrev}
    >
      <ChevronLeftRoundedIcon fontSize="large" />
    </SliderButton>
    <SliderImage
      src={images[currentPosition]}
      alt={`Product thumbnail ${currentPosition}`}
      onClick={onImageClick}
    />
    <SliderButton
      disabled={disableNextButton}
      sx={rightBtnStyle}
      onClick={handleNext}
    >
      <ChevronRightRoundedIcon fontSize="large" />
    </SliderButton>
  </SliderBox>
);
