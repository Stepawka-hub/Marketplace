export type TImageSliderProps = {
  images: string[];
  currentPosition: number;
  disablePrevButton: boolean;
  disableNextButton: boolean;
  handlePrev: () => void;
  handleNext: () => void;
  onImageClick: () => void;
};