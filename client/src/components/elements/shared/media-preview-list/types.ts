export type TMediaPreviewListUIProps = {
  files: File[];
  mainImageIndex: number;
  onSetMainImage: (index: number) => void;
  onRemove: (index: number) => void;
  getPreviewUrl: (file: File) => string;
};
