import { SELLER_REQUEST_TAG_TYPE } from "../base";

export const SELLER_REQUESTS_TAGS = {
  ALL_REQUESTS: {
    type: SELLER_REQUEST_TAG_TYPE,
    id: "ALL_REQUESTS",
  },
  LATEST_REQUEST: {
    type: SELLER_REQUEST_TAG_TYPE,
    id: "LATEST_REQUEST",
  },
} as const;
