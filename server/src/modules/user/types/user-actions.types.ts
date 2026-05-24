import { BALANCE_ACTIONS } from '../constants';

export type TFreezeAction =
  (typeof BALANCE_ACTIONS)[keyof typeof BALANCE_ACTIONS];
