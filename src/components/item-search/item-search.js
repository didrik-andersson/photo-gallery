import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchInput } from "../index";

export default function ItemSearch({ background }) {
  let navigate = useNavigate();

  const inputRef = useRef();
  const [query, setQuery] = useState("");

  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!!query && query !== " ") {
      navigate(`/posters/search/${query}`);
    }
    inputRef.current.blur();
    setQuery("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchInput
          innerRef={inputRef}
          onChange={handleInput}
          value={query}
          placeholderText="Sök efter motiv.."
          background={background}
        />
      </form>
    </>
  );
}
