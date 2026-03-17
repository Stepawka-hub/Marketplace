export const FAVORITES_TAG_TYPE = "Favorites" as const;

export const FAVORITES_TAGS = {
  LIST: {
    type: FAVORITES_TAG_TYPE,
    id: "LIST",
  },
  COUNT: {
    type: FAVORITES_TAG_TYPE,
    id: "COUNT",
  },
  IDS: {
    type: FAVORITES_TAG_TYPE,
    id: "IDS",
  },
} as const;
