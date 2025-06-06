import { FC } from "react";
import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CategoryMenuProps } from "./type";
import { useTranslation } from "react-i18next";

export const CategoryMenu: FC<CategoryMenuProps> = ({
  categories,
  selectedCategory,
  onChange,
}) => {
  const { t } = useTranslation();
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category-select-label">
        {t("category-select-label")}
      </InputLabel>
      <Select
        id="category-select"
        labelId={t("category-select-label")}
        label="Категория"
        value={selectedCategory}
        onChange={handleChange}
      >
        {categories.map((c) => (
          <MenuItem value={c}>
            <ListItemText>{c}</ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
