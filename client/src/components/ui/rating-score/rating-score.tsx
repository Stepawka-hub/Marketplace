import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Grid, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { RatingScoreProps } from "./type";

export const RatingScore: FC<RatingScoreProps> = ({
  ratingScore,
  numberReviews,
}) => {
  const { t } = useTranslation();
  return (
    <Grid container alignItems="center" spacing={0.5}>
      <StarRateRoundedIcon
        sx={{ marginBottom: "0.145rem", color: yellow[800] }}
      />
      <Typography>
        {ratingScore} • {t("product.rating.reviews", { count: numberReviews })}
      </Typography>
    </Grid>
  );
};
