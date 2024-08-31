// Rating.js
import React, { useState } from 'react';
import RatingStar from './RatingStar';

const Rating = ({ totalStars, onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (index) => {
    setRating(index + 1);
    onRatingChange(index + 1);
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <RatingStAR
          key={index}
          selected={index < rating}
          onClick={() => handleRatingClick(index)}
        />
      ))}
    </div>
  );
};

export default Rating;
{/* <Rating totalStars={5} onRatingChange={handleRatingChange} /> */}