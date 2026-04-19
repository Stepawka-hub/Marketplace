import { FC } from "react";
import { useTranslation } from "react-i18next";
import { formatRelativeTime, formattedWithSpace } from "@/shared/helpers";
import { UserAvatar } from "@/components/elements";
import { Card } from "@/components/ui";
import { Box, CardContent, Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { BID_STATUSES, LANGUAGES_MAP } from "@/shared/constants";
import {
  cardContentStyle,
  cardStyle,
  leaderIconStyle,
  priceStyle,
  timeStyle,
  userInfoStyle,
} from "./styles";
import { TBidCardProps } from "./type";

export const BidCard: FC<TBidCardProps> = ({ bid }) => {
  const { i18n } = useTranslation();
  const { amount, status, user, createdAt } = bid;
  const formattedPrice = formattedWithSpace(amount, i18n.language);

  const language =
    i18n.language === LANGUAGES_MAP.RU ? LANGUAGES_MAP.RU : LANGUAGES_MAP.EN;

  const isLeading =
    status === BID_STATUSES.ACTIVE || status === BID_STATUSES.WINNING;

  return (
    <Card variant="outlined" sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Box sx={userInfoStyle}>
          <UserAvatar avatar={user.avatar} />
          <Typography>
            {`${user.firstName} ${user.lastName}`}
          </Typography>
          {isLeading && <EmojiEventsIcon sx={leaderIconStyle} />}
        </Box>
        <Typography sx={priceStyle(isLeading)}>{formattedPrice} ₽</Typography>
        <Typography sx={timeStyle}>
          {formatRelativeTime(createdAt, language)}
        </Typography>
      </CardContent>
    </Card>
  );
};
