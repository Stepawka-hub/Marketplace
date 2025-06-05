import { Box, Slider, Typography } from '@mui/material';
import { FC, useState } from "react";

const MAX = 100000;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

export const PriceSlider: FC = () => {
  const [val, setVal] = useState<number>(MIN);
  const handleChange = (_: Event, newValue: number) => {
    setVal(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: "pointer" }}
        >
          {MIN}
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: "pointer" }}
        >
          {MAX}
        </Typography>
      </Box>
    </Box>
  );
};
