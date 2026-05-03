import { TSellerRequest, TSellerRequestStatus } from "@/shared/types";

export type TSellerRequestsListUIProps = {
  requests: TSellerRequest[];
  isLoading: boolean;
  isUpdating: boolean;
  onUpdateStatus: (
    id: string,
    status: TSellerRequestStatus,
    rejectionReason?: string,
  ) => void;
};
