import { FAVORITES_TAG_TYPE } from '../base/constants';

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
