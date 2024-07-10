import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'; // Assuming you have a separate CSS file for the Card component

const Card = ({ title, description, image, link }) => (
  <div className="card">
    <img src={image} alt={`${title} screenshot`} />
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;