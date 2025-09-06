import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RatingScoreProps } from "./type";
import { gridContainerStyle, starRateIconStyle } from "./styles";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Grid, Typography } from "@mui/material";

export const RatingScore: FC<RatingScoreProps> = ({
  ratingScore,
  numberReviews,
}) => {
  const { t } = useTranslation();
  return (
    <Grid container sx={gridContainerStyle}>
      <StarRateRoundedIcon sx={starRateIconStyle} />
      <Typography>
        {ratingScore} • {t("product.rating.reviews", { count: numberReviews })}
      </Typography>
    </Grid>
  );
};
