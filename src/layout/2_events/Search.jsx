import React from "react";

// Styles
import css from "./styles.module.scss";
import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
    } else if (e.target.value.length === 0) {
      setSearch(e.target.value);
    }
  };
  return (
    <div className={css.search}>
      <FaSearch style={{ margin: 10 }} />
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search Events"
      />{" "}
    </div>
  );
};

export default Search;
