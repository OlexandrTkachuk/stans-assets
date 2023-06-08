import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 320px;
  margin: 0 auto 60px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #194484;
  margin-bottom: 10px;
`;

export const MainImage = styled.img`
  width: 280px;
  height: 220px;
  margin: 0 auto 80px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const Item = styled.li`
  width: 320px;
  height: 392px;
  background: #ffffff;
  box-shadow: 0px 3px 16px 2px rgba(29, 51, 107, 0.15);
  border-radius: 16px;

  transition: all 0.3s ease;

  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const ImageWrapper = styled.div`
  width: 320px;
  height: 224px;
  background-image: ${props => `url(${props.item})`};
  background-position: center;
  background-size: 104.5%;
  background-repeat: no-repeat;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const InfoWrapper = styled.div`
  padding: 12px 13px 16px;
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 2.11;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #0d6eb7;
  margin-bottom: 7px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.62;
  color: #000000;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
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
