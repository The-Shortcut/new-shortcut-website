import React, { useEffect, useState } from "react";
import Talent from "./Talent";
import SearchBar from "./SearchBar";
import searchResult from "./searchResult";
import NoMatch from "./NoMatch";
import Pagination from "./Pagination";
import axios from "axios";

// // Styles
import css from "./styles.module.scss";

const TalentList = () => {
  const [talents, setTalents] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  let results;
  useEffect(() => {
    helper();
  }, []);
  const lastItem = currentPage * perPage;
  const firstItem = lastItem - perPage;
  let currentItems;

  const paginate = (number) => setCurrentPage(number);

  const previousButton = () => {
    console.log("current page is ", currentPage);
    const toPage = currentPage - 1;
    setCurrentPage(toPage <= 1 ? 1 : toPage);
  };

  const nextButton = () => {
    console.log("current page is ", currentPage);
    const toPage = currentPage + 1;
    setCurrentPage(toPage);
  };
  const helper = async () => {
    const talentsData = await axios.get(
      `https://theshortcut.org/wp-json/wp/v2/talents?per_page=100&_embed`
    );
    setTalents(talentsData.data);
  };

  const searchProcess = async (searchValue, type, data) => {
    results = await searchResult(searchValue, data, type);
    if (!results) {
      return setNoMatch(
        "There is no match, try other keywords or change the filter"
      );
    }
    setNoMatch(null);
  };

  const dataFromStore =
    talents &&
    talents.map((i) => {
      const arrayTalents = {};
      arrayTalents.id = i.id;
      arrayTalents.name = i.title.rendered;
      arrayTalents.type = i.type;
      arrayTalents.linkedInProf = i.linkedin_profile;
      arrayTalents.email = i.email;
      arrayTalents.hashtags = i.hashtags;
      arrayTalents.image = i._embedded["wp:featuredmedia"]["0"].source_url;
      return arrayTalents;
    });
  console.log("talents are ", dataFromStore);
  if (results) {
    currentItems = results.slice(firstItem, lastItem);
  } else {
    currentItems = dataFromStore.slice(firstItem, lastItem);
  }
  return (
    <>
      {dataFromStore && (
        <SearchBar searchProcess={searchProcess} talents={dataFromStore} />
      )}
      {noMatch ? (
        <NoMatch message={noMatch} />
      ) : (
        <React.Fragment>
          <Pagination
            perPage={perPage}
            totalItems={results ? results.length : dataFromStore.length}
            paginate={paginate}
            currentPage={currentPage}
            previousButton={previousButton}
            nextButton={nextButton}
          />

          <div className={css.list}>
            {currentItems &&
              currentItems.map((talent, i) => <Talent key={i} data={talent} />)}
          </div>

          <Pagination
            perPage={perPage}
            totalItems={results ? results.length : dataFromStore.length}
            paginate={paginate}
            currentPage={currentPage}
            previousButton={previousButton}
            nextButton={nextButton}
          />
        </React.Fragment>
      )}
    </>
  );
};

export default TalentList;
