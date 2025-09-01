import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "@/store";
import { getSearchQuery, setSearchQuery } from "@/store/slices/catalog";
import { SearchInput } from "@/components/ui";
import { useDebounce } from "@/hooks/useDebounce";

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
    <SearchInput
      placeholder={t("catalog-search.placeholder")}
      value={value}
      onChange={handleChange}
    />
  );
});
