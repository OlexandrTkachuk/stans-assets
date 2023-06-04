import styled from '@emotion/styled';
import { FaStar } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

export const StarIcon = styled(FaStar)`
  cursor: pointer;
  padding: 0 5px;
`;

export const Text = styled.p`
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 2.11;
  align-items: center;
  text-transform: uppercase;
  color: #242424;
  width: 20px;
`;
