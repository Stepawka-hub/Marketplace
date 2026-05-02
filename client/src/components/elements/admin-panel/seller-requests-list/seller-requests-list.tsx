import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
  containerStyle,
  titleStyle,
  tableContainerStyle,
  actionsCellStyle,
  statusChipStyle,
} from "./styles";

import { REGISTRATION_STATUSES } from "@/shared/constants";
import { TSellerRequestStatus } from "@/shared/types";
import { TSellerRequestsListUIProps } from "./type";
import { Loader } from "@/components/ui";

const TRANSLATION_PREFIX = "seller-requests";

const getStatusColor = (status: TSellerRequestStatus) => {
  switch (status) {
    case REGISTRATION_STATUSES.PENDING:
      return "warning";
    case REGISTRATION_STATUSES.APPROVED:
      return "success";
    case REGISTRATION_STATUSES.REJECTED:
      return "error";
    default:
      return "default";
  }
};

export const SellerRequestsListUI: FC<TSellerRequestsListUIProps> = ({
  requests,
  isLoading,
  isUpdating,
  onUpdateStatus,
}) => {
  const { t } = useTranslation();

  if (isLoading) {
    return <Loader />;
  }

  const handleApprove = (id: string) => {
    onUpdateStatus(id, REGISTRATION_STATUSES.APPROVED);
  };

  const handleReject = (id: string) => {
    onUpdateStatus(id, REGISTRATION_STATUSES.REJECTED);
  };

  const getStatusText = (status: TSellerRequestStatus) => {
    switch (status) {
      case REGISTRATION_STATUSES.PENDING:
        return t(`${TRANSLATION_PREFIX}.status.pending`);
      case REGISTRATION_STATUSES.APPROVED:
        return t(`${TRANSLATION_PREFIX}.status.approved`);
      case REGISTRATION_STATUSES.REJECTED:
        return t(`${TRANSLATION_PREFIX}.status.rejected`);
      default:
        return status;
    }
  };

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" sx={titleStyle}>
        {t(`${TRANSLATION_PREFIX}.title`)}
      </Typography>

      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.company`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.inn`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.email`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.phone`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.type`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.status`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.actions`)}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell>{request.companyName}</TableCell>
                <TableCell>{request.inn}</TableCell>
                <TableCell>{request.email}</TableCell>
                <TableCell>{request.phone}</TableCell>
                <TableCell>
                  {t(
                    `${TRANSLATION_PREFIX}.types.${request.registrationType.toLowerCase()}`,
                  )}
                </TableCell>
                <TableCell>
                  <Chip
                    label={getStatusText(request.status)}
                    color={getStatusColor(request.status)}
                    size="small"
                    sx={statusChipStyle}
                  />
                </TableCell>
                <TableCell sx={actionsCellStyle}>
                  {request.status === REGISTRATION_STATUSES.PENDING && (
                    <>
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        onClick={() => handleApprove(request.id)}
                        disabled={isUpdating}
                        startIcon={<CheckIcon />}
                      >
                        {t(`${TRANSLATION_PREFIX}.actions.approve`)}
                      </Button>
                      <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        onClick={() => handleReject(request.id)}
                        disabled={isUpdating}
                        startIcon={<CloseIcon />}
                      >
                        {t(`${TRANSLATION_PREFIX}.actions.reject`)}
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
