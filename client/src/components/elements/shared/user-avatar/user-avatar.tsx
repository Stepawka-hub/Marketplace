import { FC } from "react";
import { normalizeSx } from "@/shared/helpers";
import { Avatar } from "@mui/material";
import { avatarStyle } from "./styles";
import { TUserAvatarProps } from "./type";

export const UserAvatar: FC<TUserAvatarProps> = ({
  firstName = "",
  lastName = "",
  avatar,
  sx = {},
}) => {
  const initials = `${firstName[0]}${lastName[0]}`.toUpperCase();

  return (
    <Avatar sx={[avatarStyle, ...normalizeSx(sx)]} src={avatar}>
      {!avatar && initials}
    </Avatar>
  );
};
