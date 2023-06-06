import styled from '@emotion/styled';
import { HiMenu } from 'react-icons/hi';

export const MenuIcon = styled(HiMenu)`
  width: 36px;
  height: 30px;
  color: #194484;
  z-index: 999;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px 0;
  margin-bottom: 40px;
`;
