import { ChangeEvent, FC, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { formattedWithSpace } from "@/shared/helpers";
import { Box, Slider, TextField, Typography } from "@mui/material";
import {
  inputsContainerStyle,
  inputStyle,
  labelBoxStyle,
  titleStyle,
  wrapperStyle,
} from "./styles";
import { TPriceSliderProps } from "./type";

export const PriceSlider: FC<TPriceSliderProps> = ({
  priceRange,
  priceValue,
  setPriceValue,
}) => {
  const { t } = useTranslation();
  const { min, max } = priceRange;

  const currentMin = priceValue?.[0] ?? min;
  const currentMax = priceValue?.[1] ?? max;

  const [tempMin, setTempMin] = useState<string>(String(currentMin));
  const [tempMax, setTempMax] = useState<string>(String(currentMax));

  const marks = useMemo(() => [{ value: min }, { value: max }], [min, max]);

  useMemo(() => {
    setTempMin(String(currentMin));
    setTempMax(String(currentMax));
  }, [currentMin, currentMax]);

  const handleSliderChange = (_: Event, newValue: number[]) => {
    setPriceValue([newValue[0], newValue[1]]);
  };

  const handleMinInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempMin(e.target.value);
  };

  const handleMaxInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempMax(e.target.value);
  };

  const handleMinBlur = () => {
    let newMin = Number(tempMin);

    // Если введено некорректное значение
    if (isNaN(newMin)) {
      setPriceValue([currentMin, currentMax]);
      setTempMin(String(currentMin));
      return;
    }

    if (newMin > currentMax) {
      newMin = currentMax;
    }

    newMin = Math.min(Math.max(newMin, min), max);

    setPriceValue([newMin, currentMax]);
    setTempMin(String(newMin));
  };

  const handleMaxBlur = () => {
    let newMax = Number(tempMax);

    if (isNaN(newMax)) {
      setPriceValue([currentMin, currentMax]);
      setTempMax(String(currentMax));
      return;
    }

    if (newMax < currentMin) {
      newMax = currentMin;
    }

    newMax = Math.min(Math.max(newMax, min), max);

    setPriceValue([currentMin, newMax]);
    setTempMax(String(newMax));
  };

  return (
    <Box sx={wrapperStyle}>
      <Typography sx={titleStyle}>{t("filter.price-filter.title")}</Typography>

      <Box sx={inputsContainerStyle}>
        <TextField
          size="small"
          type="number"
          label={t("filter.price-filter.from")}
          value={tempMin}
          onChange={handleMinInputChange}
          onBlur={handleMinBlur}
          slotProps={{
            htmlInput: { min, max },
          }}
          sx={inputStyle}
        />
        <TextField
          size="small"
          type="number"
          label={t("filter.price-filter.to")}
          value={tempMax}
          onChange={handleMaxInputChange}
          onBlur={handleMaxBlur}
          slotProps={{
            htmlInput: { min, max },
          }}
          sx={inputStyle}
        />
      </Box>

      <Slider
        marks={marks}
        step={100}
        value={[currentMin, currentMax]}
        min={min}
        max={max}
        valueLabelDisplay="off"
        onChange={handleSliderChange}
      />

      <Box sx={labelBoxStyle}>
        <Typography variant="body2">{formattedWithSpace(min)}</Typography>
        <Typography variant="body2">{formattedWithSpace(max)}</Typography>
      </Box>
    </Box>
  );
};
