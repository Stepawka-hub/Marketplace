import { PRODUCT_TAG_TYPE } from '../base/constants';

export const PRODUCT_TAGS = {
  LIST: {
    type: PRODUCT_TAG_TYPE,
    id: 'LIST',
  },
  MY_LIST: {
    type: PRODUCT_TAG_TYPE,
    id: 'MY_LIST',
  },
} as const;