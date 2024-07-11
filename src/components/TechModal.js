import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const TechModal = ({ show, handleClose, techniques }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Techniques Used</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          {techniques.map((technique, index) => (
            <li key={index}>{technique}</li>
          ))}
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TechModal;