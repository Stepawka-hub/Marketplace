import { Box, Slider, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { TPriceSliderProps } from "./type";
import { labelBoxStyle, wrapperStyle } from "./styles";

export const PriceSlider: FC<TPriceSliderProps> = ({
  priceRange,
  priceValue,
  setPriceValue,
}) => {
  const { min, max } = priceRange;
  const marks = useMemo(() => [{ value: min }, { value: max }], [min, max]);

  const handleChange = (_: Event, newValue: number[]) => {
    setPriceValue(newValue);
  };

  return (
    <Box sx={wrapperStyle}>
      <Slider
        marks={marks}
        step={10}
        value={priceValue}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
      <Box sx={labelBoxStyle}>
        <Typography variant="body2">{min}</Typography>
        <Typography variant="body2">{max}</Typography>
      </Box>
    </Box>
  );
};
