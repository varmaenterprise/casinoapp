import React from 'react';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className="star full">&#9733;</span>);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<span key={fullStars + i} className="star half">&#9733;</span>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
