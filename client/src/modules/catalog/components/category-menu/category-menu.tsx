import {
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select
} from "@mui/material";
import { SelectChangeEvent } from "node_modules/@mui/material";
import { FC, useState } from "react";
import { CategoryMenuProps } from "./type";

export const CategoryMenu: FC<CategoryMenuProps> = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <FormControl fullWidth size='small'>
      <InputLabel id="category-select-label">Категория</InputLabel>
      <Select
        id="category-select"
        labelId="category-select-label"
        label="Категория"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value={"category1"}>
          <ListItemText>category 1</ListItemText>
        </MenuItem>
        <MenuItem value={"category2"}>
          <ListItemText>category 2</ListItemText>
        </MenuItem>
      </Select>
    </FormControl>
  );
};
