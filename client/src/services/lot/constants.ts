import { LOT_TAG_TYPE } from "../base";

export const LOT_TAGS = {
  LIST: {
    type: LOT_TAG_TYPE,
    id: "LIST",
  },
  MY_LOTS: {
    type: LOT_TAG_TYPE,
    id: "MY_LOTS",
  },
  DETAIL: {
    type: LOT_TAG_TYPE,
    id: "DETAIL",
  },
} as const;
