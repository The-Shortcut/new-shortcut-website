import React from "react";

const Pagination = ({
  perPage,
  totalItems,
  paginate,
  currentPage,
  previousButton,
  nextButton
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / perPage); i++) {
    pageNumbers.push(i);
  }

  const pag = pageNumbers.map(p => {
    return (
      <li key={p} className='page-item'>
        <button className='page-link' onClick={paginate(p)}>
          {p}
        </button>
      </li>
    );
  });

  return pageNumbers.length <= 1 ? null : (
    <React.Fragment>
      <div className='pagination-container row justify-content-center align-items-center'>
        <ul className="pagination max-size=10">
            <li className='page-item'>
              <button className='page-link' onClick={()=>paginate(pageNumbers[0])}>
              {pageNumbers[0]}
              </button>
            </li>
            <li className={`page-item${currentPage === 1 ? " disabled" : ""}`}>
            <button className="page-link" onClick={previousButton} href="#">
              {"<"}
            </button>
          </li>
          {pageNumbers.map((number) => <li
              key={number}
              className={`page-item${currentPage === number ? "-active" : ""}`}
            >
              <button
                
                href="#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          )}
          
          <li
            className={`page-item${
              currentPage === pageNumbers[pageNumbers.length - 1]
                ? " disabled"
                : ""
            }`}
          >
            <button className="page-link" onClick={nextButton} href="#">
              {">"}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(pageNumbers[pageNumbers.length - 1])}
              href="#"
            >
              {pageNumbers[pageNumbers.length - 1]}
            </button>
          </li>

         
        </ul>
      </div>
      
    </React.Fragment>
  );
};

export default Pagination;
