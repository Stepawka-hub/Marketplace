import { FC, ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUploadAvatarMutation } from "@/services";
import { ProfileAvatarUI } from "@/components/elements";
import { MAX_AVATAR_SIZE } from "./constants";
import { TProfileAvatarProps } from "./types";

export const ProfileAvatar: FC<TProfileAvatarProps> = ({
  avatar,
  initials,
}) => {
  const { t } = useTranslation();
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!file.type.startsWith("image/")) {
      setError(t("profile.avatar.errors.incorrect-type"));
      return;
    }

    if (file.size > MAX_AVATAR_SIZE) {
      setError(t("profile.avatar.errors.max-size"));
      return;
    }

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      await uploadAvatar(formData).unwrap();
    } catch (err) {
      setError(t("profile.avatar.errors.common"));
      console.error(err);
    } finally {
      event.target.value = "";
    }
  };

  return (
    <ProfileAvatarUI
      avatar={avatar}
      initials={initials}
      isLoading={isLoading}
      error={error}
      handleFileChange={handleFileChange}
    />
  );
};
