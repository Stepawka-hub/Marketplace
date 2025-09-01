export type ImageSliderProps = {
  images: string[];
  currentPosition: number;
  onImageChange: (p: number) => void;
  onImageClick: () => void;
};