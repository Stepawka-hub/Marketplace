import { FC, ChangeEvent, useState } from "react";
import { ProfileAvatarUI } from "@/components/elements";
import { MAX_AVATAR_SIZE } from "./constants";
import { TProfileAvatarProps } from "./types";

export const ProfileAvatar: FC<TProfileAvatarProps> = ({
  avatar,
  initials,
}) => {
  const isLoading = false;
  //const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setError(null);

    if (!file.type.startsWith("image/")) {
      setError("Пожалуйста, выберите изображение");
      return;
    }

    if (file.size > MAX_AVATAR_SIZE) {
      setError("Размер файла не должен превышать 5MB");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("avatar", file);

      //const result = await uploadAvatar(formData).unwrap();
    } catch (err) {
      setError("Ошибка при загрузке фото");
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
