import { Box, Slider, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { PriceSliderProps } from "./type";

export const PriceSlider: FC<PriceSliderProps> = ({
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
    <Box sx={{ width: "100%" }}>
      <Slider
        marks={marks}
        step={10}
        value={priceValue}
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">{min}</Typography>
        <Typography variant="body2">{max}</Typography>
      </Box>
    </Box>
  );
};
