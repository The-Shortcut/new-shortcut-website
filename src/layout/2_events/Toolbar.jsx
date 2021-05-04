import React from "react";
import Select from "react-select";

// Redux
import { useDispatch } from "react-redux";
import { searchEvents, paginate } from "../../actions/eventActions";

// Styles
import css from "./styles.module.scss";

// Children
import Search from "./Search";

const Toolbar = ({ setSearch }) => {
  const dispatch = useDispatch();

  // Search terms
  const options = [
    { value: "All", label: "All" },
    { value: "workshop", label: "Workshop" },
    { value: "training", label: "Training" },
    { value: "certification", label: "Certification" },
    { value: "club", label: "Clubs" },
    { value: "video record", label: "Video Record" },
    { value: "audio record", label: "Audio Record" },
    { value: "completed", label: "Completed" },
  ];

  const handleSearch = (term) => {
    if (term === "All") {
      term = "";
    }
    dispatch(searchEvents(term));
    dispatch(paginate(1));
  };

  return (
    <div className={css.toolbar}>
      <ul>
        <li>
          <Search setSearch={setSearch} />
        </li>
        <li>
          <Select
            options={options}
            onChange={(e) => handleSearch(e.value)}
            placeholder="search tags"
            styles={{ control: () => ({ display: "flex", border: "none" }) }}
          />
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
