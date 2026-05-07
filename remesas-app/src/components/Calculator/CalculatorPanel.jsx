import { useState } from "react";

import Display from "./Display";
import Keypad from "./Keypad";

import { getTodayDate } from "../../utils/helpers";

function CalculatorPanel({
  inputValue,
  setInputValue,
  remittances,
  setRemittances,
  setToast,
  setCurrentPage,
}) {
  const [isProcessing, setIsProcessing] = useState(false);

  const MAX_LENGTH = 8;

  const showToast = (message, type = "error") => {
    setToast({
      message,
      type,
    });

    setTimeout(() => {
      setToast({
        message: "",
        type: "",
      });
    }, 3000);
  };

  const stopProcessing = () => {
    setTimeout(() => {
      setIsProcessing(false);
    }, 1000);
  };

  const handleNumberClick = (num) => {
    setInputValue((prev) => {
      if (prev.length >= MAX_LENGTH) return prev;

      return prev + num;
    });
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  const handleSubmit = () => {
    if (isProcessing) return;

    setIsProcessing(true);

    if (!inputValue.trim()) {
      showToast("Debes ingresar un ID");

      stopProcessing();

      return;
    }

    const remittance = remittances.find((r) => r.id === inputValue);

    if (!remittance) {
      showToast("La remesa no existe");

      stopProcessing();

      return;
    }

    if (remittance.status === "COBRADO") {
      showToast("La remesa ya fue cobrada");

      stopProcessing();

      return;
    }

    const updatedRemittances = remittances.map((r) => {
      if (r.id === inputValue) {
        return {
          ...r,
          status: "COBRADO",
          charged_at: getTodayDate(),
        };
      }

      return r;
    });

    setRemittances(updatedRemittances);
    setCurrentPage(1);
    setInputValue("");
    showToast("Remesa cobrada correctamente", "success");

    stopProcessing();
  };

  return (
    <div className="calculator-container">
      <h2 className="title">Remesas</h2>

      <Display value={inputValue} />

      <Keypad
        onNumberClick={handleNumberClick}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
        isProcessing={isProcessing}
      />
    </div>
  );
}

export default CalculatorPanel;
