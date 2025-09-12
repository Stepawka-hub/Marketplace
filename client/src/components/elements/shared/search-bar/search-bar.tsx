import { FC, useState } from "react";
import { SearchIconWrapper, SearchInput, SearchWrapper } from "@/components/ui";
import SearchIcon from "@mui/icons-material/Search";
import { TSearchBarProps } from "./types";

export const SearchBar: FC<TSearchBarProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <SearchWrapper>
      <SearchIconWrapper active={isFocused}>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInput
        value={value}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </SearchWrapper>
  );
};
