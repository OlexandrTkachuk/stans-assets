import styled from '@emotion/styled';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

export const List = styled.ul``;

export const InfoItem = styled.li`
  position: relative;
  padding: 16px 0;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 100%;
    background-color: #0d6db780;
  }
`;

export const InfoTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  text-transform: capitalize;
  color: #242424;
  margin-bottom: 12px;
  max-width: 320px;
  padding-left: 30px;
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #242424;
  max-width: 320px;
  padding-left: 30px;
`;

export const ArrowUp = styled(RiArrowUpSLine)`
  position: absolute;
  top: 14px;
  left: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const ArrowDown = styled(RiArrowDownSLine)`
  position: absolute;
  top: 14px;
  left: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
