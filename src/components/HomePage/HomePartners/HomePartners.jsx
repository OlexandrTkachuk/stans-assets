import { useState } from 'react';
import { Button, ButtonWrapper, Item, List, Title, Wrapper } from './HomePartners.styled';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const fullList = [
  'https://i.ibb.co/sCRQwCn/partner-1.png',
  'https://i.ibb.co/JdZ6ScV/partner-13.png',
  'https://i.ibb.co/wyPVpWH/partner-3.png',
  'https://i.ibb.co/f1SWHgw/partner-4.png',
  'https://i.ibb.co/ZXFbvLb/partner-5.png',
  'https://i.ibb.co/54RH3C9/partner-6.png',
  'https://i.ibb.co/cC5bKFR/partner-7.png',
  'https://i.ibb.co/6g2CTfy/partner-8.png',
  'https://i.ibb.co/8XgTj0F/partner-14.png',
  'https://i.ibb.co/B36PfB1/partner-10.png',
  'https://i.ibb.co/fMBkJ9r/partner-11.png',
  'https://i.ibb.co/W26TnTg/partner-12.png',
];

const partList = [
  'https://i.ibb.co/sCRQwCn/partner-1.png',
  'https://i.ibb.co/JdZ6ScV/partner-13.png',
  'https://i.ibb.co/wyPVpWH/partner-3.png',
  'https://i.ibb.co/f1SWHgw/partner-4.png',
  'https://i.ibb.co/ZXFbvLb/partner-5.png',
  'https://i.ibb.co/54RH3C9/partner-6.png',
];

const HomePartners = () => {
  const [isShowMore, setIsShowMore] = useState(true);

  const full = fullList.map((item, index) => <Item key={index} item={item} />);
  const part = partList.map((item, index) => <Item key={index} item={item} />);

  return (
    <Wrapper>
      <Title>Partners</Title>

      <List>{!isShowMore ? full : part}</List>

      <ButtonWrapper>
        <Button type="button" onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? 'Show More' : 'Hide'}
        </Button>
        {isShowMore ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default HomePartners;
