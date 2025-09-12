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
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category-select-label">
        {t("category-select.label")}
      </InputLabel>
      <Select
        id="category-select"
        labelId={t("category-select.label")}
        // Todo: сделать перевод
        label="Категория"
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
