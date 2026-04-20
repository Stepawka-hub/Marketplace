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
  MY_ACTIVE_BIDS: {
    type: LOT_TAG_TYPE,
    id: "MY_ACTIVE_BIDS",
  },
  MY_BIDS_HISTORY: {
    type: LOT_TAG_TYPE,
    id: "MY_BIDS_HISTORY",
  },
  MY_ACTIVE_BIDS_COUNT: {
    type: LOT_TAG_TYPE,
    id: "MY_ACTIVE_BIDS_COUNT",
  },
} as const;
