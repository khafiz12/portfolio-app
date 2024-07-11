import React, { useState } from "react";
import TechModal from "./TechModal";
import "./Card.css";

const Card = ({ title, description, image, link, techniques }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <div className="card-links">
          <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <button className="card-link" onClick={handleModalOpen}>
            Techniques
          </button>
        </div>
      </div>
      <TechModal
        show={isModalOpen}
        handleClose={handleModalClose}
        techniques={techniques}
      />
    </div>
  );
};

export default Card;