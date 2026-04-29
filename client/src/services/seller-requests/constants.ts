import { SELLER_REQUEST_TAG_TYPE } from "../base";

export const SELLER_REQUESTS_TAGS = {
  MY_REQUESTS: {
    type: SELLER_REQUEST_TAG_TYPE,
    id: "MY_REQUESTS",
  },
  ALL_REQUESTS: {
    type: SELLER_REQUEST_TAG_TYPE,
    id: "ALL_REQUESTS",
  },
} as const;
