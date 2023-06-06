import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 320px;
`;

export const Title = styled.h2`
  padding-top: 30px;
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 60px;
`;

export const Item = styled.li`
  width: 145px;
  height: 182px;
  background: #f4f8fd;
  box-shadow: 0px 2px 12px 2px rgba(29, 51, 107, 0.1);
  border-radius: 16px;
  padding: 34px 8px 16px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SubTitle = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 1.83;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0d6eb7;
`;

export const Image = styled.img`
  width: 52px;
  height: 52px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
