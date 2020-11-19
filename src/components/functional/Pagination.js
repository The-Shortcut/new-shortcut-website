import React from "react";
import "./Pagination.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { paginate, nextPage, prevPage } from "../../actions/eventActions";

const Pagination = () => {
  const perPage = useSelector((state) => state.events.perPage);
  const currentPage = useSelector((state) => state.events.currentPage);
  const totalItems = useSelector((state) => state.events.totalItems);

  const dispatch = useDispatch();

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  const handleNext = () => {
    dispatch(nextPage());
    dispatch(paginate(currentPage));
  };

  const handlePrev = () => {
    dispatch(prevPage());
    dispatch(paginate(currentPage));
  };

  return pageNumbers.length <= 1 ? null : (
    <>
      <div className="pagination-container row justify-content-center align-items-center">
        <ul className="pagination max-size='10">
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => dispatch(paginate(pageNumbers[0]))}
              href="#"
            >
              {" "}
              {pageNumbers[0]}
            </button>
          </li>
          <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
            <button className="page-link" onClick={handlePrev} href="#">
              {"<"}
            </button>
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              className={`page-item${currentPage === number ? "-active" : ""}`}
            >
              <button
                // onClick={() => dispatch(paginate(currentPage))}
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
          <li
            className={`page-item${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? " disabled"
                : ""
            }`}
          >
            <button className="page-link" onClick={handleNext} href="#">
              {">"}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                dispatch(paginate(pageNumbers[pageNumbers.length - 1]))
              }
              href="#"
            >
              {pageNumbers[pageNumbers.length - 1]}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Pagination;
