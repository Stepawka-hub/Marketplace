import { FC, useState } from "react";
import { ImageSliderProps } from "./type";
import { Box, IconButton } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { btnStyles, sliderStyles } from "./styles";

export const ImageSlider: FC<ImageSliderProps> = ({
  images,
  currentPosition,
  onImageChange,
  onImageClick,
}) => {
  const handlePrev = () => {
    if (currentPosition === 0) return;
    onImageChange(currentPosition - 1);
  };

  const handleNext = () => {
    if (currentPosition === images.length - 1) return;
    onImageChange(currentPosition + 1);
  };

  return (
    <Box sx={sliderStyles}>
      <IconButton sx={{ ...btnStyles, left: 15 }} onClick={handlePrev}>
        <ChevronLeftRoundedIcon fontSize="large" />
      </IconButton>
      <img
        style={{ width: "100%", height: "100%", borderRadius: "1.25rem" }}
        src={images[currentPosition]}
        alt={`Product thumbnail ${currentPosition}`}
        onClick={onImageClick}
      />
      <IconButton sx={{ ...btnStyles, right: 15 }} onClick={handleNext}>
        <ChevronRightRoundedIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};
