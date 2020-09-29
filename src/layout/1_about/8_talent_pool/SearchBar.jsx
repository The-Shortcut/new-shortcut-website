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

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchProcess(keyword, typeSelect, talents);
          }}
        >
          <div className={css.search}>
            <input
              name="search"
              type="text"
              placeholder="Search..."
              className="searchInput"
              autoComplete="off"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </div>
          <div className={css.select}>
            <Select
              options={options}
              onChange={(e) => setTypeSelect(e.value)}
              placeholder="Search by"
            />
          </div>
        </form>
      </div>
      <div className="col-5" />
    </div>
  );
};

export default SearchBar;
