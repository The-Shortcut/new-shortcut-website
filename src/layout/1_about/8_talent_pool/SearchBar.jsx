import React from "react";
import Select from "react-select";

// Styles
import css from "./styles.module.scss";

const SearchBar = ({ talents, searchProcess }) => {
  const [keyword, setKeyword] = React.useState("");
  const [typeSelect, setTypeSelect] = React.useState("All");

  // Search terms
  const options = [
    { value: "All", label: "All" },
    { value: "Name", label: "Name" },
    { value: "Content", label: "Content" },
    { value: "Hashtags", label: "Hash Tags" },
  ];
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
          <Select
            className={css.select}
            options={options}
            onChange={(e) => setTypeSelect(e.value)}
            placeholder="Search by"
            defaultValue={{ label: "All", value: "All" }}
          />
          <div className={css.search}>
            <input
              type="text"
              placeholder="Search..."
              onKeyDown={handleKeyDown}
              className={css.text}
            />
            <input type="submit" className={css.submit} value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
