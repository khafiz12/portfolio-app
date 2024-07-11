import React, { useState } from 'react';
import TechModal from './TechModal';
import { Card as BootstrapCard, Button } from 'react-bootstrap';

const Card = ({ title, description, image, link, techniques }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-md-4 mb-4">
      <BootstrapCard>
        <BootstrapCard.Img variant="top" src={image} />
        <BootstrapCard.Body>
          <BootstrapCard.Title>{title}</BootstrapCard.Title>
          <BootstrapCard.Text>{description}</BootstrapCard.Text>
          <Button variant="primary" onClick={handleOpenModal}>
            View Techniques
          </Button>
          <a href={link} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </BootstrapCard.Body>
      </BootstrapCard>
      <TechModal show={showModal} handleClose={handleCloseModal} techniques={techniques} />
    </div>
  );
};

export default Card;