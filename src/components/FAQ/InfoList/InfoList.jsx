import { useState } from 'react';
import faq from '../../../helpers/faq.json';
import {
  ArrowDown,
  ArrowUp,
  InfoItem,
  InfoText,
  InfoTitle,
  List,
} from './InfoList.styled';

const InfoList = () => {
  const [isTextShow, setIsTextShow] = useState(false);

  const switchTextStatus = () => setIsTextShow(prev => !prev);

  return (
    <List>
      {faq.map(({ id, post, name }) => (
        <InfoItem id={id} key={id}>
          <InfoTitle>{name}</InfoTitle>

          {!isTextShow && <InfoText>{post}</InfoText>}

          {isTextShow ? (
            <ArrowUp onClick={switchTextStatus} />
          ) : (
            <ArrowDown onClick={switchTextStatus} />
          )}
        </InfoItem>
      ))}
    </List>
  );
};

export default InfoList;
