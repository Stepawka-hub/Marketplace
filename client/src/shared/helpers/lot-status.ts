import { LOT_STATUSES } from "../constants";
import { TLotStatus } from "../types";

export const getStatusColor = (status: TLotStatus) => {
  switch (status) {
    case LOT_STATUSES.ACTIVE:
      return "success";
    case LOT_STATUSES.DRAFT:
      return "default";
    case LOT_STATUSES.COMPLETED:
      return "info";
    case LOT_STATUSES.CANCELLED:
      return "error";
    case LOT_STATUSES.EXPIRED:
      return "warning";
    default:
      return "default";
  }
};
