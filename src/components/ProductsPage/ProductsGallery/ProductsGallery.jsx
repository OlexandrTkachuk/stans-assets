import { useState, useEffect } from 'react';
import { useRef } from 'react';
import products from '../../../helpers/products.json';
import partProducts from '../../../helpers/partProducts.json';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import {
  Button,
  ButtonWrapper,
  ImageWrapper,
  InfoWrapper,
  Item,
  List,
  MainImage,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from './ProductsGallery.styled';

const ProductsGallery = () => {
  const [isShowMore, setIsShowMore] = useState(true);
  const [coorX, setCoorX] = useState(null);
  const [coorY, setCoorY] = useState(null);
  const titleRef = useRef();

  useEffect(() => {
    const coors = titleRef.current.getBoundingClientRect();

    setCoorX(coors.x);
    setCoorY(coors.y);
  }, []);

  const full = products.map(({ id, url, title, text }) => (
    <Item key={id}>
      <ImageWrapper item={url} />

      <InfoWrapper>
        <SubTitle>{title}</SubTitle>

        <Text>{text}</Text>
      </InfoWrapper>
    </Item>
  ));

  const part = partProducts.map(({ id, url, title, text }) => (
    <Item key={id}>
      <ImageWrapper item={url} />

      <InfoWrapper>
        <SubTitle>{title}</SubTitle>

        <Text>{text}</Text>
      </InfoWrapper>
    </Item>
  ));

  return (
    <Wrapper>
      <Title ref={titleRef}>Stan assets products</Title>

      <MainImage
        src="https://i.ibb.co/YNTLGCN/mobile-Dev.png"
        alt="Stan assets products"
      />

      <List>{!isShowMore ? full : part}</List>

      {isShowMore ? (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => {
              setIsShowMore(false);
            }}
          >
            Show more
          </Button>
          <IoIosArrowDown />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <Button
            type="button"
            onClick={() => {
              setIsShowMore(true);
              window.scrollTo(coorX, coorY);
            }}
          >
            Hide
          </Button>
          <IoIosArrowUp />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default ProductsGallery;
