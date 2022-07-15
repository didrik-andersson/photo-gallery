import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledInputBase,
  SearchIconWrapper,
  SearchWrapper,
} from "./hooks/index";

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
