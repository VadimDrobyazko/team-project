/* eslint-disable max-len */
import React from 'react';

type Props = {
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<Props> = ({ currentPage, totalPages, paginate }) => {
  const prevButtonClass =
    currentPage === 1
      ? 'pagination__previous pagination__button hidden'
      : 'pagination__previous pagination__button';
  const nextButtonClass =
    currentPage === totalPages
      ? 'pagination__next pagination__button hidden'
      : 'pagination__next pagination__button';

  return (
    <div className="pagination">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={prevButtonClass}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.828 6.77815H16V8.77815H3.828L9.192 14.1422L7.778 15.5562L0 7.77815L7.778 0.000152588L9.192 1.41415L3.828 6.77815Z"
            fill="#121212"
          />
        </svg>
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={
            currentPage === index + 1
              ? 'pagination__button pagination__button--active'
              : 'pagination__button'
          }
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={nextButtonClass}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.172 6.77791H0V8.77791H12.172L6.808 14.1419L8.222 15.5559L16 7.77791L8.222 -9.15527e-05L6.808 1.41391L12.172 6.77791Z"
            fill="#121212"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
