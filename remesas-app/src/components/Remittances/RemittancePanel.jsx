import { FaSearch, FaFilter, FaPrint, FaRegBell } from "react-icons/fa";

import SearchBar from "./SearchBar";
import RemittanceList from "./RemittanceList";
import Pagination from "./Pagination";
import "./../../styles/Remittances.css";
import { formatLongDate } from "../../utils/helpers";

function RemittancePanel({
  remittances,
  search,
  setSearch,
  currentPage,
  setCurrentPage,
}) {
  const filteredRemittances = remittances.filter((remittance) => {
    const term = search.toLowerCase();

    return (
      remittance.id.toLowerCase().includes(term) ||
      remittance.company.toLowerCase().includes(term) ||
      remittance.amount.toString().includes(term)
    );
  });
  // filtramos para poner solo las cobradas
  const chargedRemittances = filteredRemittances
    .filter((r) => r.status === "COBRADO")
    .sort((a, b) => {
      return new Date(b.charged_at) - new Date(a.charged_at);
    });

  // paginacion.
  const ITEMS_PER_PAGE = 10;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedRemittances = chargedRemittances.slice(startIndex, endIndex);

  const totalPages = Math.ceil(chargedRemittances.length / ITEMS_PER_PAGE);

  return (
    <div className="remittance-panel">
      <div className="topbar">
        <div className="notification-wrapper">
          <button className="notification-btn">
            <FaRegBell />
          </button>

          <span className="notification-dot"></span>
        </div>

        <div className="user-profile">
          <div className="avatar">E</div>

          <div className="user-info">
            <p className="user-name">Elizabeth</p>

            <p className="user-role">Operador</p>
          </div>

          <button className="dropdown-btn">▼</button>
        </div>
      </div>

      <div className="panel-header">
        <div>
          <h2 className="panel-title">Hoy</h2>

          <p className="panel-date">{formatLongDate(new Date())}</p>
        </div>

        <div className="panel-actions">
          <button className="action-btn">
            <FaSearch />
          </button>

          <button className="action-btn">
            <FaFilter />
          </button>

          <button className="action-btn">
            <FaPrint />
          </button>
        </div>
      </div>

      <SearchBar search={search} setSearch={setSearch} />

      <RemittanceList remittances={paginatedRemittances} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default RemittancePanel;
