import { SearchInput } from "@ui/search-input";
import { ChangeEvent, FC, useState } from "react";
import { useTranslation } from "react-i18next";

export const CatalogSearch: FC = () => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <SearchInput
      placeholder={t("catalog-search.placeholder")}
      value={value}
      onChange={handleChange}
    />
  );
};
