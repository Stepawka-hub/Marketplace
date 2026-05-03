import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Loader } from "@/components/ui";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import {
  containerStyle,
  titleStyle,
  tableContainerStyle,
  tableStyle,
  tableHeadStyle,
  actionsTitleStyle,
} from "./styles";
import { TSellerRequestsListUIProps } from "./type";
import { SellerRequestRow } from '../seller-request-row';

const TRANSLATION_PREFIX = "seller-requests";

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

  return (
    <Box sx={containerStyle}>
      <Typography variant="h4" sx={titleStyle}>
        {t(`${TRANSLATION_PREFIX}.title`)}
      </Typography>

      <TableContainer component={Paper} sx={tableContainerStyle}>
        <Table sx={tableStyle}>
          <TableHead sx={tableHeadStyle}>
            <TableRow>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.user`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.company`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.inn`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.email`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.phone`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.type`)}</TableCell>
              <TableCell>{t(`${TRANSLATION_PREFIX}.table.status`)}</TableCell>
              <TableCell>
                {t(`${TRANSLATION_PREFIX}.table.description`)}
              </TableCell>
              <TableCell sx={actionsTitleStyle}>
                {t(`${TRANSLATION_PREFIX}.table.actions`)}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {requests.map((request) => (
              <SellerRequestRow
                key={request.id}
                request={request}
                isUpdating={isUpdating}
                onUpdateStatus={onUpdateStatus}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};