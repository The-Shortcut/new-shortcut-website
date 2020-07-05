import React from "react";

// Styles
import css from "./styles.module.scss";

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
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search events"
      />{" "}
    </div>
  );
};

export default Search;
