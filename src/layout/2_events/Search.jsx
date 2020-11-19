import React from "react";

import { useDispatch } from "react-redux";
import { searchEvents, paginate } from "../../actions/eventActions";
// Styles
import css from "./styles.module.scss";
// import { FaSearch } from "react-icons/fa";

const Search = ({ setSearch }) => {
  const dispatch = useDispatch();
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.target.value.length === 0) {
      setSearch(e.target.value);
      dispatch(searchEvents(e.target.value));
      dispatch(paginate(1));
    }
  };
  return (
    <div className={css.search}>
      {/* <FaSearch style={{ margin: 10 }} /> */}
      <input
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="Search Events"
      />{" "}
    </div>
  );
};

export default Search;
