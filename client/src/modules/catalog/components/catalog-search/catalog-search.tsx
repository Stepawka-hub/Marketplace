import { SearchInput } from "@ui/search-input";
import { ChangeEvent, FC, useState } from "react";

export const CatalogSearch: FC = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput
      placeholder="Введите название товара"
      value={value}
      onChange={handleChange}
    />
  );
};
