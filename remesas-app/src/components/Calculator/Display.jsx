import "./../../styles/Display.css";

function Display({ value }) {
  return (
    <div className="display">
      <span className="predisplay">|**</span>
      <span className="value">{value}</span>
    </div>
  );
}

export default Display;
