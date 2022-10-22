import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  SearchWrapper,
  StyledInputBase,
} from "./styled-components";

export default function SearchInput({
  onChange,
  value,
  placeholderText,
  innerRef,
  background,
}) {
  return (
    <>
      <SearchWrapper background={background}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholderText}
          inputProps={{ "aria-label": "sökfält" }}
          value={value}
          onChange={onChange}
          inputRef={innerRef}
        />
      </SearchWrapper>
    </>
  );
}
