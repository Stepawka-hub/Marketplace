import { useState, useEffect } from "react";

type TUseRejectionModalProps = {
  id?: string;
  isRejected?: boolean;
  rejectionReason?: string;
  storageKey?: string;
};

export const useRejectionModal = ({
  storageKey = "rejection_modal",
  id,
  isRejected,
  rejectionReason,
}: TUseRejectionModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isRejected || !id) {
      return;
    }

    const stored = localStorage.getItem(storageKey);
    const parsed = stored ? JSON.parse(stored) : null;

    if (!parsed || parsed.id !== id) {
      setIsOpen(true);
    }
  }, [id, isRejected, storageKey]);

  const closeModal = () => {
    if (id) {
      localStorage.setItem(storageKey, JSON.stringify({ id, viewed: true }));
    }
    setIsOpen(false);
  };

  return { isOpen, rejectionReason, closeModal };
};
