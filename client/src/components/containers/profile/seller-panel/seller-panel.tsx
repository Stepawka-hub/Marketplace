import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import {
  useGetMeQuery,
  useGetLatestSellerRequestStatusQuery,
} from "@/services";
import { useRejectionModal } from "@/hooks/useRejectionModal";
import { isVendor } from "@/shared/helpers";
import { ROUTES } from "@/config/routes";
import {
  LS_KEYS,
  SELLER_REQUEST_STATUSES,
  USER_ROLES,
} from "@/shared/constants";

import { SellerRequestForm } from "@/components/containers";
import {
  SellerPanelUI,
  SellerRequestPending,
  SellerRequestRejectedModal,
} from "@/components/elements";
import { Loader } from "@/components/ui";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const { PENDING, REJECTED } = SELLER_REQUEST_STATUSES;

export const SellerPanel: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: userData, isLoading: isUserLoading } = useGetMeQuery();
  const { data: statusData, isLoading: isStatusLoading } =
    useGetLatestSellerRequestStatusQuery();

  const isSeller = isVendor(userData?.roles || [USER_ROLES.USER]);

  const { isOpen, closeModal, rejectionReason } = useRejectionModal({
    storageKey: LS_KEYS.SELLER_REQUEST_REJECTION,
    id: statusData?.id,
    isRejected: statusData?.status === REJECTED,
    rejectionReason: statusData?.rejectionReason,
  });

  if (isUserLoading || isStatusLoading) {
    return <Loader />;
  }

  if (isSeller) {
    return (
      <SellerPanelUI
        headerElement={
          <Button
            startIcon={<AddIcon />}
            color="success"
            variant="contained"
            onClick={() => navigate(ROUTES.CREATE_PRODUCT)}
          >
            {t("profile.seller-panel.create-product")}
          </Button>
        }
      />
    );
  }

  if (!statusData?.hasRequest) {
    return <SellerRequestForm />;
  }

  if (statusData.status === PENDING) {
    return <SellerRequestPending />;
  }

  if (statusData.status === REJECTED) {
    return (
      <>
        <SellerRequestForm />
        <SellerRequestRejectedModal
          open={isOpen}
          onClose={closeModal}
          rejectionReason={rejectionReason}
        />
      </>
    );
  }

  return null;
};
