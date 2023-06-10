import { useState } from 'react';
import { Wrapper, StarIcon, IconWrapper } from './BlogStarRate.styled';

const BlogStarRate = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <Wrapper>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <IconWrapper key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
              style={{ display: 'none' }}
            />
            <StarIcon
              size={20}
              className="star"
              color={currentRating <= (hover || rating) ? '#06B25F' : '#E1E1E1'}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </IconWrapper>
        );
      })}
    </Wrapper>
  );
};

export default BlogStarRate;
