import React from "react";

// Styles
import css from "./styles.module.scss";

const SearchBar = ({ talents, searchProcess }) => {
  const [keyword, setKeyword] = React.useState("");
  const [typeSelect, setTypeSelect] = React.useState("All");

  const handleKeyDown = (e) => {
    console.log("in key down");
    if (e.key === "Enter" || e.target.value.length === 0) {
      setKeyword(e.target.value);
    }
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword && typeSelect) {
      searchProcess(keyword, typeSelect, talents);
    } else if (keyword.length === 0) {
      searchProcess(keyword, typeSelect, talents);
    } else {
      alert("Please select from the dropdown and enter the search keyword!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={css.searchContainer}>
          <select
            name="subjects"
            defaultValue={"All"}
            onChange={({ target }) => setTypeSelect(target.value)}
          >
            <option value="All">All</option>
            <option value="Name">Name</option>
            <option value="Content">Content</option>
            <option value="Hashtags">Hashtags</option>
          </select>
          <div className={css.search}>
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleKeyDown}
              className={css.text}
            />
            <button type="submit" className={css.submit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
