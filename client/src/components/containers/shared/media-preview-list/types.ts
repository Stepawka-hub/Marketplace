export type TMediaPreviewListProps = {
  files: File[];
  mainImageIndex: number;
  onSetMainImage: (index: number) => void;
  onRemove: (index: number) => void;
};
