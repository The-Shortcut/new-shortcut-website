import React, { useEffect, useState } from "react";
import Talent from "./Talent";
import SearchBar from "./SearchBar";
import searchResult from "./searchResult";
import NoMatch from "./NoMatch";
import Pagination from "./Pagination";
import SkeletonList from "../../../components/functional/SkeletonList";
import axios from "axios";

// // Styles
import css from "./styles.module.scss";

const TalentList = () => {
  const [talents, setTalents] = useState("");
  const [mainData, setMainData] = useState("");
  const [filteredTalent, setFilteredTalent] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  let dataFromStore;
  let results;
  useEffect(() => {
    helper();
  }, []);
  // const lastItem = currentPage * perPage;
  // const firstItem = lastItem - perPage;
  // let currentItems;

  // const paginate = (number) => setCurrentPage(number);

  // const previousButton = () => {
  //   console.log("current page is ", currentPage);
  //   const toPage = currentPage - 1;
  //   setCurrentPage(toPage <= 1 ? 1 : toPage);
  // };

  // const nextButton = () => {
  //   console.log("current page is ", currentPage);
  //   const toPage = currentPage + 1;
  //   setCurrentPage(toPage);
  // };
  const helper = async () => {
    const talentsData = await axios.get(
      `https://theshortcut.org/wp-json/wp/v2/talents?per_page=100&_embed`
    );
    dataFromStore =
      talentsData &&
      talentsData.data.map((i) => {
        const arrayTalents = {};
        arrayTalents.id = i.id;
        arrayTalents.name = i.title.rendered;
        arrayTalents.type = i.type;
        arrayTalents.linkedInProf = i.linkedin_profile;
        arrayTalents.email = i.email;
        arrayTalents.hashtags = i.hashtags;
        arrayTalents.content = i.content;
        arrayTalents.image = i._embedded["wp:featuredmedia"]["0"].source_url;
        return arrayTalents;
      });
    setMainData(dataFromStore);
    setTalents(dataFromStore);
  };

  const searchProcess = async (searchValue, type, data) => {
    console.log("data is ", data, "search vaue ", searchValue, "type ", type);
    results = await searchResult(searchValue, data, type);
    if (results.length < 1) {
      return setNoMatch(
        "There is no match, try other keywords or change the filter"
      );
    }
    console.log("resukt is ", results);
    setNoMatch(null);
    setTalents(results);
  };

  // if (results) {
  //   currentItems = results.slice(firstItem, lastItem);
  //   console.log("currentItems from res", currentItems);
  // } else {
  //   currentItems = talents.slice(firstItem, lastItem);
  //   console.log("currentItems from ds", currentItems);
  // }
  return talents ? (
    <>
      {/* {!filteredTalent ? (
        <SearchBar searchProcess={searchProcess} talents={talents} />
      ) : (
        <SearchBar searchProcess={searchProcess} talents={filteredTalent} />
      )}
      {noMatch ? (
        <NoMatch message={noMatch} />
      ) : (
        <React.Fragment>
          <Pagination
            perPage={perPage}
            totalItems={results ? results.length : talents.length}
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
            totalItems={results ? results.length : talents.length}
            paginate={paginate}
            currentPage={currentPage}
            previousButton={previousButton}
            nextButton={nextButton}
          />
        </React.Fragment>
      )} */}
      {talents && (
        <SearchBar searchProcess={searchProcess} talents={mainData} />
      )}
      {noMatch ? (
        <NoMatch message={noMatch} />
      ) : (
        <div className={css.list}>
          {talents &&
            talents.map((talent, i) => <Talent key={i} data={talent} />)}{" "}
        </div>
      )}
    </>
  ) : (
    <SkeletonList />
  );
};

export default TalentList;
