import { FC } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CategoryMenuProps } from "./type";

export const CategoryMenu: FC<CategoryMenuProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  const { t } = useTranslation();
  const handleChange = (evt: SelectChangeEvent) => {
    onChange(evt.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category-select-label">
        {t("category-select.label")}
      </InputLabel>
      <Select
        id="category-select"
        label={t("category-select.label")}
        value={selectedCategory}
        onChange={handleChange}
      >
        <MenuItem value="all">
          <ListItemText>{t("category-select.all")}</ListItemText>
        </MenuItem>
        {categories.map((c, index) => (
          <MenuItem key={index} value={c}>
            <ListItemText>{c}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
