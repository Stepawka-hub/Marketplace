import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { SearchInputProps } from "./types";

export const SearchInput: FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Search>
      <SearchIconWrapper active={isFocused}>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        placeholder={placeholder}
        inputProps={{ "aria-label": "search" }}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Search>
  );
};
