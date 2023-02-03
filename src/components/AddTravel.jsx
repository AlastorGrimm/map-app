import React, { useState } from "react";
import './AddTravel.css';
import './AddTravelFunct';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Добавить путешествие</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Добавить путешествие</p>
            <handleAddRow/>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;