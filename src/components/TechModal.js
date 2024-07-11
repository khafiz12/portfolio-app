import React from "react";
import "./TechModal.css";

const TechModal = ({ title, techniques, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>{title} - Techniques Used</h3>
        <ul>
          {techniques.map((technique, index) => (
            <li key={index}>{technique}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TechModal;