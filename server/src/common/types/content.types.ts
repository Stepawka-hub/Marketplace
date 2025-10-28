import { MEDIA_TYPE } from '../constants';

export type TMediaType = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE];
