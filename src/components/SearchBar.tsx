import React, { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // const HandleOnChange = () => {
  //   setSearchTextInput(ref.current.value);
  //   if (ref.current?.value === null) {
  //     alert("You are here");
  //   }
  // };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <div className="input-group ">
        <input
          // onChange={HandleOnChange}
          id="searchTextInput"
          ref={ref}
          className="form-control"
          type="search"
          placeholder="Search by title . . . "
        />
        <button className="input-group-text " type="submit" id="btn_search">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
