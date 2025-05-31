import { useRef, useState } from "react";

export const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    anchorRef,
    handleOpen,
    handleClose,
  };
};
