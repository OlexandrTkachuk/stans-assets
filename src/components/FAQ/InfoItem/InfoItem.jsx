import { useState } from 'react';
import { ArrowDown, ArrowUp, InfoText, InfoTitle, Item } from './InfoItem.styled';

const InfoItem = ({ item }) => {
  const [isTextShow, setIsTextShow] = useState(true);
  const { id, name, post } = item;
  const switchTextStatus = () => setIsTextShow(prev => !prev);

  return (
    <Item id={id} key={id}>
      <InfoTitle>{name}</InfoTitle>

      {!isTextShow && <InfoText>{post}</InfoText>}

      {isTextShow ? (
        <ArrowDown onClick={switchTextStatus} />
      ) : (
        <ArrowUp onClick={switchTextStatus} />
      )}
    </Item>
  );
};

export default InfoItem;
