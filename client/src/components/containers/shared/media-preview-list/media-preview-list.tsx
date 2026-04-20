import { FC } from "react";
import { MediaPreviewListUI } from "@/components/elements";
import { TMediaPreviewListProps } from "./types";

export const MediaPreviewList: FC<TMediaPreviewListProps> = ({
  files,
  mainImageIndex,
  onSetMainImage,
  onRemove,
}) => {
  const getPreviewUrl = (file: File): string => {
    return URL.createObjectURL(file);
  };

  return (
    <MediaPreviewListUI
      files={files}
      mainImageIndex={mainImageIndex}
      onSetMainImage={onSetMainImage}
      onRemove={onRemove}
      getPreviewUrl={getPreviewUrl}
    />
  );
};
