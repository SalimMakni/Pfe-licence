import React from 'react';//Composant fonctionnel
//Gestion de la pagination
//Fournir le jsx pour la listeBookCard.jsx
const Pagination = ({ handlePrevPage, handleNextPage, handlePageChange, totalPages, currentPage }) => {
  return (//Return page jsx pagination classe définie
    <div className="pagination">
      {/* Pagination controls */}
      <button
        onClick={() => handlePrevPage()}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={currentPage === index + 1}
          className={`page-link ${currentPage === index + 1 ? 'page-linkactive' : ''}`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handleNextPage()}
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationBook;
