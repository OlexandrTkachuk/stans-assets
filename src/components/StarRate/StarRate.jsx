import { useState } from 'react';
import { StarIcon, Text, Wrapper } from './StarRating.styled';

const StarRate = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <Wrapper>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              style={{ display: 'none' }}
            />
            <StarIcon
              size={32}
              className="star"
              color={currentRating <= (hover || rating) ? '#06B25F' : '#E1E1E1'}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <Text>{rating}</Text>
    </Wrapper>
  );
};

export default StarRate;
