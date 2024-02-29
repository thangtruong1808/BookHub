import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="input-group ">
        <input
          className="form-control"
          type="search"
          placeholder="Search . . ."
        />
        <button className="input-group-text " type="submit" id="btn_search">
          <BsSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
