import "./../../styles/Remittances.css";

function RemittanceList({ remittances }) {
  if (remittances.length === 0) {
    return <p className="empty-message">No hay remesas cobradas</p>;
  }

  return (
    <div className="remittance-list">
      {remittances.map((remittance) => (
        <div key={remittance.id} className="remittance-row">
          <span className="remittance-id">#{remittance.id}</span>

          <span className="remittance-company">{remittance.company}</span>

          <span className="remittance-amount">
            ${remittance.amount.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RemittanceList;
