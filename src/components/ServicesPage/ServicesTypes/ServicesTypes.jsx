import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import services from '../../../helpers/services.json';
import {
  Image,
  Item,
  List,
  StyledLink,
  SubTitle,
  Title,
  Wrapper,
} from './ServicesTypes.styled';

const ServicesTypes = () => {
  return (
    <Wrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <Title>Services</Title>
      <List>
        {services.map((item, index) => (
          <Item key={index}>
            <StyledLink to={item.to} onClick={() => window.scrollTo(0, 0)}>
              <Image src={item.url} alt={item.name} />
              <SubTitle>{item.name}</SubTitle>
            </StyledLink>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default ServicesTypes;
