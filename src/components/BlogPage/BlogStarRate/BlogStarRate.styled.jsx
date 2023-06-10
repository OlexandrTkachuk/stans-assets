import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

export const IconWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarIcon = styled(FaStar)`
  cursor: pointer;
`;
