import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  // console.log("------- You called SearchBar Component -------");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <div className="input-group">
        <input
          // onChange={HandleOnChange}
          id="searchTextInput"
          ref={ref}
          className="form-control bg-light"
          type="search"
          placeholder="Search by title . . . "
        />

        <button
          className="btn btn-warning "
          type="submit"
          id="btn_search"
          style={{ width: "70px" }}
        >
          <BsSearch style={{ fontSize: "20px", color: "black" }} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
