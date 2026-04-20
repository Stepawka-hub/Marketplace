import { TLotStatus } from "@/shared/types";

export type TStatusFilterProps = {
  selectedStatuses: TLotStatus[];
  onChange: (statuses: TLotStatus[]) => void;
};
