import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import { LOT_STATUSES } from "@/shared/constants";
import { isLotStatus } from "@/shared/helpers";
import { TStatusFilterProps } from "./type";
import { buttonStyle, titleStyle } from "./styles";

const TRANSLATION_PREFIX = "filter.status-filter";

export const StatusFilter: FC<TStatusFilterProps> = ({
  selectedStatuses,
  onChange,
}) => {
  const { t } = useTranslation();
  const allStatuses = Object.values(LOT_STATUSES);
  const isAllSelected = selectedStatuses.length === allStatuses.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      onChange([]);
    } else {
      onChange([...allStatuses]);
    }
  };

  const handleChange = (status: string, checked: boolean) => {
    if (!isLotStatus(status)) {
      return;
    }

    if (checked) {
      onChange([...selectedStatuses, status]);
    } else {
      onChange(selectedStatuses.filter((s) => s !== status));
    }
  };

  const statusLabels: Record<string, string> = {
    [LOT_STATUSES.ACTIVE]: t(`${TRANSLATION_PREFIX}.statuses.active`),
    [LOT_STATUSES.COMPLETED]: t(`${TRANSLATION_PREFIX}.statuses.completed`),
    [LOT_STATUSES.EXPIRED]: t(`${TRANSLATION_PREFIX}.statuses.expired`),
  };

  return (
    <FormControl component="fieldset" fullWidth>
      <Typography sx={titleStyle}>
        {t(`${TRANSLATION_PREFIX}.title`)}
      </Typography>

      <FormGroup>
        {allStatuses.map((status) => (
          <FormControlLabel
            key={status}
            control={
              <Checkbox
                size="small"
                checked={selectedStatuses.includes(status)}
                onChange={(e) => handleChange(status, e.target.checked)}
              />
            }
            label={statusLabels[status]}
          />
        ))}
      </FormGroup>

      <Button
        variant="contained"
        size="small"
        sx={buttonStyle}
        onClick={handleSelectAll}
      >
        {t(
          isAllSelected
            ? `${TRANSLATION_PREFIX}.clear-all`
            : `${TRANSLATION_PREFIX}.select-all`,
        )}
      </Button>
    </FormControl>
  );
};
