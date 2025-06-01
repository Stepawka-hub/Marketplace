import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";
import { SearchInputProps } from "./type";

export const SearchInput: FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
      value={value}
      placeholder={placeholder}
      inputProps={{ "aria-label": "search" }}
      onChange={onChange}
    />
  </Search>
);
