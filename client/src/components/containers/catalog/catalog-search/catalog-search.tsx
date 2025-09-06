import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "@/store";
import { getSearchQuery, setSearchQuery } from "@/store/slices/catalog";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchBar } from "@/components/elements";

export const CatalogSearch: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleSearchChange = useCallback(
    (value: string) => {
      dispatch(setSearchQuery(value));
    },
    [dispatch]
  );

  const debouncedCallback = useDebounce(handleSearchChange, 1000);

  const searchQuery = useSelector(getSearchQuery);
  const [value, setValue] = useState(searchQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debouncedCallback(e.target.value);
  };

  return (
    <SearchBar
      value={value}
      placeholder={t("catalog-search.placeholder")}
      onChange={handleChange}
    />
  );
});
