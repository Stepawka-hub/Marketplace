import { useState } from "react";

export const useFavorites = () => {
  const [isInFavorites, setIsInFavories] = useState(false);
  const addToFavorites = () => {
    setIsInFavories((p) => !p);
  };

  return {
    isInFavorites,
    addToFavorites,
  };
};
