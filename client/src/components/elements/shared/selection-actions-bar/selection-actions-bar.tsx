import { FC } from "react";
import { useTranslation } from "react-i18next";
import { TSelectionActionsBarProps } from "./types";
import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  gridContainerStyle,
  removeBtnStyle,
  selectAllContainerStyle,
} from "./styles";

export const SelectionActionsBar: FC<TSelectionActionsBarProps> = ({
  totalSelected,
  isAllSelected,
  onSelectAll,
  onDeleteAll,
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={selectAllContainerStyle} variant="outlined">
      <Grid container sx={gridContainerStyle}>
        <FormControlLabel
          label={t("selection-actions.select-all")}
          control={
            <Checkbox
              checked={isAllSelected}
              indeterminate={totalSelected > 0 && !isAllSelected}
              onChange={onSelectAll}
            />
          }
        />
        <Button
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          sx={removeBtnStyle}
          onClick={onDeleteAll}
        >
          {t("selection-actions.remove-all")}
        </Button>
      </Grid>
    </Paper>
  );
};
