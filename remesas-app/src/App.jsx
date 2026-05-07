import Sidebar from "./components/Sidebar";
import CalculatorPanel from "./components/Calculator/CalculatorPanel";
import { useState } from "react";
import { remittances as initialData } from "./data/mockRemittances";
import Toast from "./components/Toast";
import RemittancePanel from "./components/Remittances/RemittancePanel";

function App() {
  const [remittances, setRemittances] = useState(initialData);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [toast, setToast] = useState({
    message: "",
    type: "",
  });

  return (
    <>
      <Toast message={toast.message} type={toast.type} />
      <div className="app-container">
        <Sidebar />
        <CalculatorPanel
          inputValue={inputValue}
          setInputValue={setInputValue}
          remittances={remittances}
          setRemittances={setRemittances}
          setError={setError}
          setToast={setToast}
          setCurrentPage={setCurrentPage}
        />
        <RemittancePanel
          remittances={remittances}
          search={search}
          setSearch={setSearch}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}

export default App;
