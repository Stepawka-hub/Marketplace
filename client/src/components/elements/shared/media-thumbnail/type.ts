export type TMediaThumbnailProps = {
  file: File;
  isMain: boolean;
  previewUrl: string;
  mainBadgeLabel: string;
  onSelect: () => void;
  onRemove: () => void;
};
