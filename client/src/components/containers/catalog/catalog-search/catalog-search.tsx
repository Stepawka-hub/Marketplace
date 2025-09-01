import { ChangeEvent, FC, memo, useState } from "react";
import { useTranslation } from "react-i18next";

export const CatalogSearch: FC = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };
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
