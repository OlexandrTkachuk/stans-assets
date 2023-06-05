import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  margin-top: 130px;
  margin-bottom: 160px;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 22px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 44px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
`;

export const Item = styled.li`
  width: 144px;
  height: 72px;
  background: #ffffff;
  box-shadow: 0px 3px 16px 4px rgba(29, 51, 107, 0.1);
  border-radius: 16px;
  background-image: ${props => `url(${props.item})`};
  background-position: center;
  background-size: 45%;
  background-repeat: no-repeat;

  transition: all 0.3s ease;

  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const Button = styled.button`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #194484;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
