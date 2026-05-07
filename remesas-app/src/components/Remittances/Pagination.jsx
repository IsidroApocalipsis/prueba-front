import "./.././../styles/pagination.css";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  if (totalPages <= 1) return null;
  const prev = "←";
  const next = "→";
  return (
    <div className="pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
      >
        {prev}
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
      >
        {next}
      </button>
    </div>
  );
}

export default Pagination;
