import { useState } from 'react';
import BlogStarRate from '../BlogStarRate/BlogStarRate';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  InfoWrapper,
  Item,
  ItemImage,
  ItemText,
  ItemTitle,
  StatsText,
  StatsWrapper,
  TimeIcon,
  TimeWrapper,
  UserAvatar,
  // UserDate,
  UserName,
  UserWrapper,
  ViewIcon,
  ViewWrapper,
} from './BlogItem.styled';

const BlogItem = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    time,
    views,
    imageUrl,
    userAvatarUrl,
    userName,
    // userDate,
    title,
    text,
  } = item[currentIndex];

  const handleLeftArrowClick = () => {
    if (currentIndex <= 0) {
      return;
    }

    setCurrentIndex(prev => (prev -= 1));
  };

  const handleRightArrowClick = () => {
    if (currentIndex === item.length - 1) {
      return;
    }

    setCurrentIndex(prev => (prev += 1));
  };

  const checkTextLength = () => {
    const str = text.split('');

    if (str.length <= 110) {
      return str.join('');
    }

    return str.splice(0, 100).join('') + '...';
  };

  const checkTitleLength = () => {
    const str = title.split('');

    if (str.length <= 40) {
      return str.join('');
    }

    return str.splice(0, 40).join('') + '...';
  };

  return (
    <Item>
      <StatsWrapper>
        <BlogStarRate />

        <TimeWrapper>
          <TimeIcon size={20} color=" #B1B1B1" />
          <StatsText>{time}</StatsText>
        </TimeWrapper>

        <ViewWrapper>
          <ViewIcon size={20} color=" #B1B1B1" />
          <StatsText>{views}</StatsText>
        </ViewWrapper>
      </StatsWrapper>
      <ItemImage src={imageUrl} alt={userName} />
      <InfoWrapper>
        <UserWrapper>
          <UserAvatar src={userAvatarUrl} alt={userName} />

          <UserName>{userName}s</UserName>

          {/* <UserDate>{userDate}</UserDate> */}
        </UserWrapper>

        <ItemTitle>{checkTitleLength()}</ItemTitle>

        <ItemText>{checkTextLength()}</ItemText>
      </InfoWrapper>

      <ArrowLeftIcon color="#84B5FF" size={52} onClick={handleLeftArrowClick} />

      <ArrowRightIcon color="#84B5FF" size={52} onClick={handleRightArrowClick} />
    </Item>
  );
};

export default BlogItem;
