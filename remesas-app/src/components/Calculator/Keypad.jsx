import "./../../styles/Keypad.css";

function Keypad({ onNumberClick, onDelete, onSubmit, isProcessing }) {
  return (
    <div className="keypad">
      <div className="div1">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(1)}
        >
          1
        </button>
      </div>
      <div className="div2">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(2)}
        >
          2
        </button>
      </div>
      <div className="div3">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(3)}
        >
          3
        </button>
      </div>
      <div className="div4">
        <button
          className="key delete"
          disabled={isProcessing}
          onClick={onDelete}
        >
          ⌫
        </button>
      </div>
      <div className="div5">
        <button
          className="key delete"
          disabled={isProcessing}
          onClick={() => onNumberClick(4)}
        >
          4
        </button>
      </div>
      <div className="div6">
        <button
          className="key delete"
          disabled={isProcessing}
          onClick={() => onNumberClick(5)}
        >
          5
        </button>
      </div>
      <div className="div7">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(6)}
        >
          6
        </button>
      </div>
      <div className="div8">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(7)}
        >
          7
        </button>
      </div>
      <div className="div9">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(8)}
        >
          8
        </button>{" "}
      </div>
      <div className="div10">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(9)}
        >
          9
        </button>
      </div>
      <div className="div11">
        <button
          className="key submit"
          disabled={isProcessing}
          onClick={onSubmit}
        >
          ↵
        </button>
      </div>
      <div className="div12">
        <button
          className="key zero"
          disabled={isProcessing}
          onClick={() => onNumberClick(0)}
        >
          0
        </button>
      </div>
      <div className="div13">
        <button
          className="key"
          disabled={isProcessing}
          onClick={() => onNumberClick(".")}
        >
          .
        </button>
      </div>
    </div>
  );
}
export default Keypad;
