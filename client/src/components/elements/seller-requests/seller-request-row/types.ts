import { TSellerRequest, TSellerRequestStatus } from "@/shared/types";

export type TSellerRequestRowProps = {
  request: TSellerRequest;
  isUpdating: boolean;
  onUpdateStatus: (
    id: string,
    status: TSellerRequestStatus,
    rejectionReason?: string,
  ) => void;
};
