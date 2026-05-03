import { FC, MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { UserAvatar } from "@/components/elements";
import {
  TableRow,
  TableCell,
  Chip,
  Typography,
  IconButton,
  Collapse,
  Box,
  Button,
  TextField,
  Popover,
  Paper,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { SELLER_REQUEST_STATUSES } from "@/shared/constants";
import {
  statusChipStyle,
  emptyCellStyle,
  expandCellStyle,
  actionsCellStyle,
  descriptionRowStyle,
  descriptionBoxStyle,
  popoverContentStyle,
  popoverActionsStyle,
  userInfoStyle,
} from "./styles";
import { TSellerRequestStatus } from "@/shared/types";
import { TSellerRequestRowProps } from "./types";

const TRANSLATION_PREFIX = "seller-requests";

const getStatusColor = (status: TSellerRequestStatus) => {
  switch (status) {
    case SELLER_REQUEST_STATUSES.PENDING:
      return "warning";
    case SELLER_REQUEST_STATUSES.APPROVED:
      return "success";
    case SELLER_REQUEST_STATUSES.REJECTED:
      return "error";
    default:
      return "default";
  }
};

export const SellerRequestRow: FC<TSellerRequestRowProps> = ({
  request,
  isUpdating,
  onUpdateStatus,
}) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(false);

  const [rejectAnchorEl, setRejectAnchorEl] = useState<HTMLElement | null>(
    null,
  );
  const [rejectionReason, setRejectionReason] = useState("");
  const isOpen = Boolean(rejectAnchorEl);

  const {
    id,
    user,
    registrationType,
    companyName,
    inn,
    email,
    phone,
    description,
    status,
    rejectionReason: savedRejectionReason,
  } = request;
  const { firstName = "", lastName = "", avatar } = user;

  const getStatusText = (status: TSellerRequestStatus) => {
    switch (status) {
      case SELLER_REQUEST_STATUSES.PENDING:
        return t(`${TRANSLATION_PREFIX}.status.pending`);
      case SELLER_REQUEST_STATUSES.APPROVED:
        return t(`${TRANSLATION_PREFIX}.status.approved`);
      case SELLER_REQUEST_STATUSES.REJECTED:
        return t(`${TRANSLATION_PREFIX}.status.rejected`);
      default:
        return status;
    }
  };

  const handleApprove = () => {
    onUpdateStatus(id, SELLER_REQUEST_STATUSES.APPROVED);
  };

  const handleOpenRejectPopover = (event: MouseEvent<HTMLElement>) => {
    setRejectAnchorEl(event.currentTarget);
    setRejectionReason("");
  };

  const handleCloseRejectPopover = () => {
    setRejectAnchorEl(null);
  };

  const handleConfirmReject = () => {
    onUpdateStatus(id, SELLER_REQUEST_STATUSES.REJECTED, rejectionReason);
    setRejectAnchorEl(null);
  };

  const toggleExpand = () => setExpanded((prev) => !prev);

  const getRejectionTooltip = () => {
    if (status !== SELLER_REQUEST_STATUSES.REJECTED) {
      return "";
    }

    return savedRejectionReason
      ? `${t(`${TRANSLATION_PREFIX}.rejection-reason`)}: ${savedRejectionReason}`
      : t(`${TRANSLATION_PREFIX}.rejection-reason-default`);
  };

  return (
    <>
      <TableRow>
        <TableCell sx={userInfoStyle}>
          <UserAvatar
            firstName={firstName}
            lastName={lastName}
            avatar={avatar}
          />
          {`${firstName} ${lastName}`.trim() || "—"}
        </TableCell>
        <TableCell>{companyName}</TableCell>
        <TableCell>{inn}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{phone}</TableCell>
        <TableCell>
          {t(`${TRANSLATION_PREFIX}.types.${registrationType.toLowerCase()}`)}
        </TableCell>
        <TableCell>
          <Tooltip
            title={getRejectionTooltip()}
            arrow
            disableHoverListener={status !== SELLER_REQUEST_STATUSES.REJECTED}
          >
            <Chip
              label={getStatusText(status)}
              color={getStatusColor(status)}
              size="small"
              sx={statusChipStyle}
            />
          </Tooltip>
        </TableCell>

        <TableCell sx={expandCellStyle}>
          {description ? (
            <IconButton size="small" onClick={toggleExpand}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          ) : (
            <Typography
              variant="body2"
              color="text.disabled"
              sx={emptyCellStyle}
            >
              {t(`${TRANSLATION_PREFIX}.table.no-description`)}
            </Typography>
          )}
        </TableCell>

        <TableCell>
          {status === SELLER_REQUEST_STATUSES.PENDING ? (
            <Box sx={actionsCellStyle}>
              <Button
                size="small"
                variant="contained"
                color="success"
                disabled={isUpdating}
                startIcon={<CheckIcon />}
                onClick={handleApprove}
              >
                {t(`${TRANSLATION_PREFIX}.actions.approve`)}
              </Button>
              <Button
                size="small"
                variant="outlined"
                color="error"
                disabled={isUpdating}
                startIcon={<CloseIcon />}
                onClick={handleOpenRejectPopover}
              >
                {t(`${TRANSLATION_PREFIX}.actions.reject`)}
              </Button>
            </Box>
          ) : (
            <Typography
              variant="body2"
              color="text.disabled"
              sx={emptyCellStyle}
            >
              —
            </Typography>
          )}
        </TableCell>
      </TableRow>

      {description && (
        <TableRow sx={descriptionRowStyle}>
          <TableCell colSpan={9} sx={{ p: 0 }}>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <Box sx={descriptionBoxStyle}>
                <Typography variant="body2">
                  <strong>
                    {t(`${TRANSLATION_PREFIX}.table.description`)}:
                  </strong>{" "}
                  {description}
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      )}

      <Popover
        open={isOpen}
        anchorEl={rejectAnchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handleCloseRejectPopover}
      >
        <Paper sx={popoverContentStyle}>
          <Typography variant="subtitle2" gutterBottom>
            {t(`${TRANSLATION_PREFIX}.reject-popover.title`)}
          </Typography>
          <TextField
            size="small"
            fullWidth
            multiline
            rows={3}
            placeholder={t(`${TRANSLATION_PREFIX}.reject-popover.placeholder`)}
            value={rejectionReason}
            sx={{ mb: 2 }}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
          <Box sx={popoverActionsStyle}>
            <Button
              size="small"
              variant="contained"
              color="error"
              onClick={handleConfirmReject}
            >
              {t(`${TRANSLATION_PREFIX}.reject-popover.confirm`)}
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={handleCloseRejectPopover}
            >
              {t(`${TRANSLATION_PREFIX}.reject-popover.cancel`)}
            </Button>
          </Box>
        </Paper>
      </Popover>
    </>
  );
};
