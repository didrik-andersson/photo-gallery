import React, { useState } from "react";
import { useStyledComponents } from "./index";
import SearchIcon from "@mui/icons-material/Search";
import {
  StyledInputBase,
  SearchIconWrapper,
  SearchWrapper,
} from "./hooks/index";

export default function SearchInput({ onChange, value, placeholderText, innerRef}) {
  return (
    <>
      <SearchWrapper>
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
